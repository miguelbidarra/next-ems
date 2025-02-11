import { login} from './actions'

export default function LoginPage() {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg space-y-6">
        <div className="form-control w-full">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            formAction={login}
            className="btn btn-primary w-full"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}
