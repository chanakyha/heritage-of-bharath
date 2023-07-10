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
          Heritage of Bharath
        </h1>
        <p className="font-martalsans text-xl text-white">
          Explore Inscriptions & Sites
        </p>
      </div>
    </div>
  );
};

export default Hero;
