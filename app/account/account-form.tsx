'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [accessLevel, setAccessLevel] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, access_level, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setAccessLevel(data.access_level)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    fullname,
    accessLevel,
    avatar_url,
  }: {
    fullname: string | null
    accessLevel: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        access_level: accessLevel,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget max-w-md mx-auto my-6 p-12 bg-base-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="text"
          value={user?.email || ''}
          disabled
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fullName" className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accesslevel" className="label">
          <span className="label-text">Access Level</span>
        </label>
        <input
          id="accesslevel"
          type="text"
          value={accessLevel || ''}
          onChange={(e) => setAccessLevel(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <button
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          onClick={() => updateProfile({ fullname, accessLevel, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update'}
        </button>
      </div>
      <div>
        <form action="/auth/signout" method="post">
          <button
            className="btn btn-secondary w-full"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}
