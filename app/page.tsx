import Image, { StaticImageData } from "next/image";
import { Imprima, Inter } from "@next/font/google";
import styles from "./page.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import ChooseCard from "@/src/components/Card/ChooseCard";

import malco from "../public/assets/malco.png";
import presta from "../public/assets/presta.png";
import kozak from "../public/assets/kozak.png";
import whiz from "../public/assets/whiz.png";
import ppi from "../public/assets/ppi.png";
import carbg from "../public/assets/carbg.png";

import CompanyCard from "@/src/components/Card/CompanyCard";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export type CardProps = {
  headInfo: string;
  bodyInfo: string;
};
const cards: CardProps[] = [
  {
    headInfo: "69 years",
    bodyInfo: "Of service and experience.",
  },
  {
    headInfo: "1.2  Mill.",
    bodyInfo: "Cases produced per month",
  },
  {
    headInfo: "300+ Empl",
    bodyInfo: "Across locations in north east Ohio",
  },
  {
    headInfo: "MT. 10",
    bodyInfo: "Consumer Packaged Goods Partners",
  },
  {
    headInfo: "3",
    bodyInfo: "Manudacturing facilities",
  },
  {
    headInfo: "70+ ctry",
    bodyInfo: "Serving customers in over 70 countries",
  },
];

export type CompanyCardProps = {
  icon: StaticImageData;
  title: string;
  color: string;
};

const companyCards: CompanyCardProps[] = [
  {
    icon: malco,
    title: "automotive division",
    color: "#D2232A",
  },
  {
    icon: presta,
    title: "products division",
    color: "#E2A51F",
  },
  {
    icon: kozak,
    title: "auto dry wash division",
    color: "#2681BB",
  },
  {
    icon: whiz,
    title: "automotive chemicals",
    color: "#E1393E",
  },
  {
    icon: ppi,
    title: "automotive lubricants",
    color: "#231F20",
  },
];

export default function Home() {
  return (
    <>
      <div className="">
        <div className="relative text-white">
          <Image
            className="h-56 md:h-screen object-cover"
            src={carbg}
            alt="car"
          />
          <div className="absolute bottom-0 md:bottom-36 left-0 right-0 px-4 py-2 bg-gray-700 bg-opacity-20 ">
            <div className="md:w-2/4 lg:w-3/5 md:space-y-10">
              <h1 className="text-lg md:text-3xl lg:text-5xl text-white font-semibold uppercase">
                A Global Leader in Automotive and Cleaning Products
              </h1>
              <div className="border-b-2 text-rose-500 border-b-rose-600 w-1/6" />
              <p className="text-xs md:text-base lg:text-base text-white">
                Malco Products, Inc., was founded in 1953 in Barberton, Ohio by
                Murray Glauberman as a manufacturer of professional automotive
                and specialty cleaning products. Today, the company is still
                owned and operated by the same family.
              </p>

              <Link
                className="md:hidden text-rose-600 font-semibold text-lg"
                href="/about"
              >
                Learn more
              </Link>

              <div
                style={{
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                }}
                className="hidden md:flex bg-[#D2232A] px-10 py-3 items-center font-semibold space-x-4 w-fit inset-x-3 cursor-pointer  hover:scale-105 transition scale-110 ease-in-out duration-300"
              >
                <span className="text-lg uppercase text-white">Learn more</span>
                <AiOutlineArrowRight className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-gray-50 px-4">
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="flex flex-col items-center text-2xl md:text-5xl font-bold uppercase">
            Serving customers in over <span> 70 countries</span>
          </h2>
          <p className="flex flex-col items-center text-center">
            Since 1953, Malco has grown into a global manufacturing company with
            three world-
            <span>
              class production facilities in north east Ohio, producing multiple
              lines of business.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-auto mx-auto space-x-2 justify-center">
          {companyCards.map((card, index) => (
            <CompanyCard data={card} key={index} />
          ))}
        </div>
        <div className="block lg:flex py-20">
          <div className="lg:w-1/2 p-4 space-y-4">
            <h1 className="text-5xl font-bold uppercase">Why Choose Us</h1>
            <p className="leading-relaxed text-xl lg:text-lg">
              Malco Products, Inc. operates in the professional detailing and
              automotive aftermarket under the Malco Automotive brand of
              professional-grade cleaning and detailing products. Malco also
              serves the automotive refinish industry with our line of Presta
              Automotive paint correction and protection products, the marine
              industry with the Presta Marine line of boat and RV detailing and
              cleaning products, and the consumer household cleaning market
              under legacy brands like Grease Relief, Jubilee, ZUD, and X-14.
            </p>

            <div
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
              className=" flex bg-[#D2232A] px-10 py-3 items-center font-semibold space-x-4 w-fit inset-x-3 cursor-pointer  hover:scale-105 transition scale-110 ease-in-out duration-300"
            >
              <span className="text-xl uppercase text-white">Learn more</span>
              <AiOutlineArrowRight className="text-white text-xl" />
            </div>
          </div>

          {/* 6 tiles card */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-3">
            {cards.map((card, index) => (
              <div
                className={
                  index % 2 == 0 ? "bg-red-600 p-6" : "bg-[#171717] p-6"
                }
                key={index}
              >
                <ChooseCard data={card} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
