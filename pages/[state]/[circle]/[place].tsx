import Image from "next/image";
import { useRouter } from "next/router";

const CirclePage = () => {
  const router = useRouter();
  const { state, circle, place } = router.query;

  const data = {
    name: place,
    image: "https://i.ibb.co/FmHsNmD/istockphoto-471507884-612x612.jpg",
    description: `Mahabalipuram, also known as Mamallapuram, is a historic town located in the state of Tamil Nadu, India. It is situated on the Coromandel Coast of the Bay of Bengal, about 58 kilometers south of Chennai, the capital city of Tamil Nadu.

    Mahabalipuram is renowned for its ancient rock-cut temples, monolithic sculptures, and UNESCO World Heritage Site status. The town was a bustling port city during the 7th and 8th centuries of the Pallava dynasty rule in South India. Many of the monuments and temp`,
  };

  return (
    <div className="min-h-[calc(100vh-96px)]  w-screen bg-secondary ">
      <div className="p-10 gap-10 flex items-start">
        <div className="flex items-center bg-white/50 w-1/3 p-3 flex-col shadow-lg sticky top-32 shadow-black/20 rounded-lg border border-yellow-900">
          <Image
            src={data.image}
            alt="map"
            width={1080}
            height={1920}
            className="h-72 w-48 object-contain object-center"
          />
          <p className="font-extrabold font-martalsans text-yellow-900 text-2xl">
            {data.name}
          </p>
          <p className="text-xs text-center">{data.description}</p>
        </div>
        <div className="w-2/3">
          <div className="flex flex-wrap gap-10 mt-10 justify-evenly">
            <div
              onClick={() => router.push(`/${state}/${circle}/${place}/sites`)}
              className="w-72 h-72 relative flex hover:scale-110 duration-200 ease-out transition-all cursor-pointer items-center justify-center font-martalsans text-white font-extrabold text-xl rounded-lg shadow-lg shadow-black"
            >
              <Image
                src="https://i.ibb.co/vDp73T4/istockphoto-1316648703-612x612.jpg"
                alt="image"
                width={1080}
                height={1920}
                className="h-full rounded-lg w-full top-0 absolute z-10 object-contain object-center"
              />
              <p className="flex items-center justify-center w-full rounded-lg h-full bg-black/50 z-50 hover:bg-black/20">
                Sites
              </p>
            </div>
            <div
              onClick={() =>
                router.push(`/${state}/${circle}/${place}/inscriptions`)
              }
              className="w-72 relative h-72 flex hover:scale-110 duration-200 ease-out transition-all cursor-pointer items-center justify-center font-martalsans text-white font-extrabold text-xl rounded-lg shadow-lg shadow-black"
            >
              <Image
                src="https://i.ibb.co/nRrCfVN/istockphoto-1322518486-612x612.jpg"
                alt="image"
                width={1080}
                height={1920}
                className="h-full rounded-lg w-full top-0 absolute z-10 object-contain object-center"
              />
              <p className="flex items-center justify-center w-full rounded-lg h-full bg-black/50 z-50 hover:bg-black/20">
                Inscription
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirclePage;
