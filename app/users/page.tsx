import { User } from "@/types/User";

const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jhon@gmail.com",
    password: "adad",
  },
  {
    id: 2,
    firstName: "Reyad",
    lastName: "Hasan",
    email: "rcoreyad@gmail.com",
    password: "adadad",
  },
  {
    id: 3,
    firstName: "Nabil",
    lastName: "Hasan",
    email: "nabil@gmail.com",
    password: "a4444d",
  },
];

export default function Users() {
  return (
    <>
      {users.length > 0 ? (
        <div className="px-1 py-10 md:py-20 md:px-10 md:w-4/5 lg:w-2/3 mx-auto text-xs md:text-base">
          <h1 className="text-3xl font-bold text-center py-10">User Profile</h1>
          <table className="grid font-sans text-xs">
            <thead className="border-b border-b-slate-300 py-3 w-full  text-gray-400">
              <tr className="grid grid-cols-4 place-items-start gap-1 md:gap-3">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="grid grid-cols-4 gap-1 md:gap-3 border-b border-b-slate-300 py-3"
                >
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xl font-semibold border-b border-b-slate-400 py-2">
            {users.length} User
          </p>
        </div>
      ) : (
        <p className="py-32 lg:py-64 text-center font-semibold text-2xl">
          no user found
        </p>
      )}
    </>
  );
}
