import { CardProps } from "@/app/page";

export default function ChooseCard({ data }: { data: CardProps }) {
  return (
    <div className="flex flex-col justify-center items-center bg-inherit text-white">
      <h6 className="text-xl md:text-4xl lg:text-3xl font-bold">
        {data.headInfo}
      </h6>
      <p className="text-sm md:text-xl text-center font-sans">
        {data.bodyInfo}
      </p>
    </div>
  );
}
