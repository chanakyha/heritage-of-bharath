import { BsChevronRight } from "react-icons/bs";
const About = () => {
  return (
    <div className="w-screen flex items-center justify-center bg-secondary h-52">
      <div className="max-w-6xl mx-auto grid grid-cols-4">
        <h1 className="font-martalsans  text-headerBg font-extrabold text-4xl  mx-auto">
          About our Project
        </h1>
        <div className="col-span-3 flex flex-col">
          <p className="font-martalsans text-[#442000] font-light text-sm ">
            This fascinating study explores the historical and contemporary
            influences of Hindu dynasties on global societies. By delving into
            ancient sites, historical cities, and temples, we aim to uncover the
            rich cultural, religious, architectural, and artistic legacies left
            behind by these dynasties.
          </p>
          <div className="justify-end flex">
            <button className="flex underline font-bold items-center">
              <p>Learn More</p>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
