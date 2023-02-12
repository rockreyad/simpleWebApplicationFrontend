import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="bg-white py-10 px-2 lg:px-10 lg:py-20 xl:px-20 xl:py-40 text-black">
      <div className="flex flex-col space-y-5 md:w-2/4 mx-auto">
        <h1 className="text-3xl font-bold text-center normal-case">
          Reset your password
        </h1>
        <p className="font-sans text-gray-400 text-sm">
          We'll send you an email to reset your password.
        </p>
        <div className="w-full">
          <form className="font-sans space-y-6 ">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex space-x-4 items-center  text-xs">
              <button
                type="submit"
                className="bg-[#D2232A] text-white font-rajdhani font-normal uppercase px-5 py-3"
              >
                Reset
              </button>
              <Link href="/login" className="text-gray-500">
                Cancel
              </Link>
            </div>
          </form>
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold">New Customer ?</h3>
          <p className="font-sans text-gray-500 text-sm">
            Sign up for an account to take advantage of order tracking and
            history as well as pre-filled forms during checkout on subsequent
            orders.
          </p>
          <Link
            href="/register"
            className="bg-[#53D3D1] text-white font-rajdhani font-normal uppercase px-5 py-3 w-fit"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
