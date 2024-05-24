import { createUser } from "./createUser";
//import { createClient } from "@/utils/supabase/server";

export default async function Profiles() {
/*   const supabase = createClient();
  const { data: notes } = await supabase.from("profiles").select();
 */
  return (
    <>
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
          <div className="form-control">
            <button
              type="submit"
              formAction={createUser}
              className="btn btn-secondary w-full"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
      {/* {JSON.stringify(notes, null, 2)} */}
    </>
  );
}
