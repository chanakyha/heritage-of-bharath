import About from "@/components/index/About";
import Hero from "@/components/index/Hero";
import IndiaMap from "@/components/index/Map";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-96px)] w-screen flex flex-col">
      <Hero />
      <About />
      <IndiaMap />
    </div>
  );
}
