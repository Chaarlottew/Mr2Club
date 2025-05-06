import Image from "next/image";
import Link from "next/link";

type Panel = {
  src: string;
  label: string;
  href: string;
};

type CarouselProps = {
  panels: Panel[];
};

export default function Carousel({ panels }: CarouselProps) {
  return (
    <div className="flex overflow-x-auto gap-10 px-10 snap-x snap-mandatory">
      {panels.map((panel, idx) => (
        <Link
          key={idx}
          href={panel.href}
          className="relative w-1/3 h-[800px] snap-center border-x-4 border-black cursor-pointer group overflow-hidden "
        >
          {/* image wrapper for hover effect */}
          <div className="w-full h-full relative transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90">
            <Image
              src={panel.src}
              alt={panel.label}
              fill
              className="object-cover"
            />
          </div>

          {/* Label */}
          <div className="absolute bottom-0 right-5 text-white text-[50px] font-bold [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000]">
            {panel.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
