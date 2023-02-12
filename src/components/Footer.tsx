import Image from "next/image";
import logo from "../../public/logo.png";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";

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

const socialItems = [
  {
    name: "LinkedIn",
    link: "/linkedin",
    icon: <RiLinkedinFill />,
  },
  {
    name: "Facebook",
    link: "/facebook",
    icon: <RiFacebookFill />,
  },
  {
    name: "youtube",
    link: "/youtube",
    icon: <RiYoutubeFill />,
  },
  {
    name: "Instagram",
    link: "/instagram",
    icon: <RiInstagramFill />,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#171717] text-gray-200 py-10 px-6 flex flex-col items-center space-y-5">
        <Image className="w-40" src={logo} alt="" />

        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <Link
              href={"#"}
              className="hover:text-white hover:font-semibold"
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div>
          <ul className="flex space-x-3">
            {socialItems.map((item, index) => (
              <Link
                href={"#"}
                className="border hover:border-gray-600 rounded-full p-1 text-sm cursor-pointer"
                key={index}
              >
                {item.icon}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className="text-sm font-light flex space-x-4">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms and Conditions</Link>
          </ul>
        </div>
        <div>
          <p className="text-sm font-light capitalize">
            © 2023 Malco products Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
