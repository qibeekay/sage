import type { ReactNode } from "react";

interface SharedHeroProps {
  badgeText?: string;
  title: ReactNode;
  imageSrc: string;
}

const SharedHero = ({
  badgeText = "Know us more",
  title,
  imageSrc,
}: SharedHeroProps) => {
  return (
    <header className="w-full bg-black [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] ">
      <div className="px-4 min-h-fit sm:min-h-dvh max-w-7xl mx-auto pt-32 relative">
        <div className="flex flex-col items-center text-center relative z-1">
          {/* badge text */}
          {badgeText && (
            <p className="border border-[#002752] py-2 px-6 rounded-full text-sm sm:text-lg w-fit">
              {badgeText}
            </p>
          )}

          {/* header text */}
          <h1 className="text-xl xs:text-3xl md:text-5xl lg:text-7xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-5 flex flex-col">
            {title}
          </h1>
        </div>

        {/* image */}
        <div className="lg:absolute -bottom-4">
          <div>
            <img className="w-[85%] mx-auto" src={imageSrc} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SharedHero;
