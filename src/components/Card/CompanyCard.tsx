import { CompanyCardProps } from "@/app/page";
import Image from "next/image";

export default function CompanyCard({ data }: { data: CompanyCardProps }) {
  return (
    <>
      <div
        style={{ borderColor: data.color }}
        className={`bg-white border-b-8 space-y-10 px-6 py-6 justify-center flex flex-col items-center drop-shadow-sm border-b-${data.color}`}
      >
        <Image className="w-16" src={data.icon} alt={data.title} />

        <p className="font-bold uppercase text-center">{data.title}</p>
      </div>
    </>
  );
}
