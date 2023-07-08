import Image from "next/image";
import HeroImage from "@/public/images/hero-image.jpg";
const Hero = () => {
  return (
    <div className="relative">
      <Image
        className="h-[calc(100vh-96px)]"
        src={HeroImage}
        alt="hero-image"
      />
      <div className="absolute top-0 w-full h-full bg-headerBg/60" />
      <div className="absolute top-0 w-full h-full flex items-center justify-center gap-1 animate-pulse flex-col">
        <h1 className="font-martalsans text-7xl text-white font-medium capitalize">
          welcome To Ahmedabad
        </h1>
        <p className="font-martalsans text-xl text-white">
          Explore India&apos;s First World Heritage City
        </p>
      </div>
    </div>
  );
};

export default Hero;
