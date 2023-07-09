import Image from "next/image";
import { useRouter } from "next/router";

const data = {
  name: "Tamil Nadu",
  image:
    "https://i.ibb.co/StBVG54/445b818b2259989b6ff32db37facaeba-removebg-preview.png",
  description: `Tamil Nadu, located in the southern part of India, is a land steeped in rich heritage and cultural significance. Renowned for its ancient temples, magnificent architecture, vibrant festivals, and classical arts, Tamil Nadu boasts a legacy that spans over thousands of years.
The state's cultural heritage is also exemplified through its literature and music. Tamil literature, with its ancient Sangam poetry and works of renowned poets like Thiruvalluvar and Subramania Bharati, reflects the profound wisdom and beauty of Tamil Nadu's intellectual heritage. The soul-stirring compositions of Carnatic music, performed in traditional concerts and festivals, add to the state's cultural richness.
    Tamil Nadu's heritage is not just a relic of the past; it is a vibrant and living testament to the people's deep-rooted traditions and cultural pride. The preservation and celebration of this heritage contribute to the state's unique identity and make it a captivating destination for travelers and enthusiasts alike.`,
  circles: [
    {
      name: "Chennai",
      image: "https://i.ibb.co/KyHyDwG/istockphoto-1211952929-612x612.jpg",
    },
    {
      name: "Madurai",
      image: "https://i.ibb.co/GdfvpVP/istockphoto-487535891-612x612.jpg",
    },
    {
      name: "Thanjavor",
      image: "https://i.ibb.co/5KtmNXv/istockphoto-1198023306-612x612.jpg",
    },
  ],
};

const StatePage = () => {
  const router = useRouter();
  const { state } = router.query;
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
          <h1 className="font-martalsans font-extrabold text-yellow-900 text-2xl text-center">
            Circles in {data.name}
          </h1>
          <div className="flex flex-wrap gap-10 mt-10 justify-evenly">
            {data.circles.map((circle, key) => {
              return (
                <div
                  key={key}
                  onClick={() =>
                    router.push(
                      "/" + state + "/" + circle.name.toLocaleLowerCase()
                    )
                  }
                  className="w-64 h-64 relative cursor-pointer hover:scale-105 duration-200 ease-out transition-all flex items-center justify-center shadow-lg shadow-black/20 rounded-full"
                >
                  <Image
                    src={circle.image}
                    width={1080}
                    height={1920}
                    className="h-full rounded-full w-full top-0 absolute z-10 object-contain object-center"
                    alt="image"
                  />
                  <p className="font-martalsans bg-black/70 hover:bg-black/50 w-full h-full rounded-full flex items-center justify-center z-50 font-bold text-lg text-white/80">
                    {circle.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatePage;
