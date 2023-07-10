import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import EmblemImage from "@/public/images/indian-emblem.png";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-headerBg z-50 sticky top-0 shadow-sm shadow-black px-10 py-5 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          onClick={() => router.push("/")}
          className="flex cursor-pointer active:scale-95 duration-200 ease-out transition-all items-center gap-3"
        >
          <Image
            className="h-14 scale-150 w-5 object-contain invert"
            src={EmblemImage}
            alt="indian-emblem"
          />
          <p className="font-bold text-sm">Ministry of Culture</p>
        </div>
        <div className="flex text-sm font-medium bg-headerSub rounded-md shadow-black shadow-sm items-center">
          <p
            onClick={() => router.push("/")}
            className="p-4  border-white/10 hover:border-[1px] hover:border-white/60 duration-300 transition-colors ease-out rounded-l-md border-[0.1px] hover:bg-black cursor-pointer"
          >
            HOME
          </p>
          <p
            onClick={() => router.push("/about")}
            className="p-4 text-sm  border-white/10 hover:border-[1px] hover:border-white/60 duration-300 transition-colors ease-out border-[0.1px] hover:bg-black cursor-pointer"
          >
            ABOUT PROJECT
          </p>
          <p
            onClick={() => router.push("/")}
            className="p-4 text-sm border-[0.1px] hover:border-[1px] hover:border-white/60 duration-300 transition-colors ease-out rounded-r-md border-white/10 hover:bg-black cursor-pointer"
          >
            HERITAGE SITES
          </p>
        </div>
        <div className="flex items-center gap-2 border-b border-white/90 pb-1">
          <AiOutlineSearch className="text-xl" />
          <input
            placeholder="Search..."
            type="text"
            className="bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
