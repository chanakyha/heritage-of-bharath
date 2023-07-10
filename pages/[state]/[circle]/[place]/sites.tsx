import Image from "next/image";
import { useRouter } from "next/router";

const Sites = () => {
  const router = useRouter();
  const { state, circle, place } = router.query;
  return (
    <div className="min-h-[calc(100vh-96px)]  w-screen bg-secondary py-10">
      <h1 className="font-extrabold text-yellow-900 capitalize text-2xl font-martalsans text-center">
        Sites Located in {place},{circle},{state}
      </h1>

      <div className="my-10 max-w-5xl flex flex-col gap-10 mx-auto">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-5">
            <Image
              src="https://res.cloudinary.com/dxzzsxitt/image/upload/v1689028020/shore-temple-india_672794-382_wrixhr.avif"
              alt="incription-1"
              width={1080}
              height={1920}
              className="h-72 w-96 rounded-lg shadow-black shadow-lg"
            />
            <p className="text-xs w-96 font-bold text-red-500 bg-white/90 rounded-sm shadow-black/20 shadow-sm flex items-center justify-center p-2">
              Preservation Vulnerability Metric- Threatened
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-extrabold font-martalsans text-lg">
                Shore Temple
              </h1>
              <p className="capitalize text-sm text-medium italic">
                12.6165° N, 80.1993° E • India • {state} • {circle} • {place}
              </p>
              <p className="text-xs">
                The Shore Temple is a famous monument located in Mahabalipuram
                (also known as Mamallapuram), a town in the state of Tamil Nadu,
                India. It is a UNESCO World Heritage Site and is known for its
                architectural beauty and historical significance. The Shore
                Temple is a structural temple that was built during the 8th
                century AD, during the reign of the Pallava dynasty. It is
                believed to be one of the earliest examples of stone-built
                temples in South India.
              </p>
            </div>
            <div className="flex mt-4 items-center gap-2">
              <h1 className="font-bold text-lg font-martalsans">
                Construction year:
              </h1>
              <p className="text-lg font-medium font-martalsans">725 AD</p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg font-martalsans">
                Constructed by:
              </h1>
              <p className="text-lg font-medium font-martalsans">
                {" "}
                Narasimhavarman II  Pallava dynasty.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg font-martalsans">
                Material Used:
              </h1>
              <p className="text-lg font-medium font-martalsans"> Granite</p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg font-martalsans">
                Preservation Vulnerability Metric:
              </h1>
              <p className="text-lg font-medium font-martalsans"> Threatened</p>
            </div>

            <div className="bg-black/20 backdrop-blur-lg text-red-500 text-center font-bold h-20 flex items-center justify-center text-xl shadow-black/20 shadow-sm rounded-sm">
              XML
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sites;
