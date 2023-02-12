import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const navItems = [
  {
    name: "Our Story",
    link: "/our-story",
  },
  {
    name: "Community Involvement",
    link: "/community-involvement",
  },
  {
    name: "Our Brands",
    link: "/our-brands",
  },
  {
    name: "Careers",
    link: "/careers",
  },
];

export default function Header() {
  return (
    <header className="font-sans text-sm text-white">
      <div className="flex bg-[#171717] px-10 py-4">
        <div className="flex justify-between space-x-4 items-center w-full">
          <Link href={"/"} className="flex-shrink-0">
            <Image className="w-20 md:w-40" src={logo} alt="Workflow" />
          </Link>
          <div>
            <ul className="hidden lg:flex space-x-5">
              {navItems.map((item, index) => (
                <Link
                  href={"#"}
                  className=" transition ease-in duration-300 hover:font-semibold"
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href={"/login"}
              className="border border-white px-2 py-1 cursor-pointer"
            >
              Login/Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
