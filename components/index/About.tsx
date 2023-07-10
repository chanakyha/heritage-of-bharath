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
            Firstly, it focuses on the preservation of cultural heritage. Hindu
            dynasties have contributed immensely to the worlds art,
            architecture, literature, and religious practices. By studying their
            cultural impact, we can better understand and safeguard this
            invaluable heritage for future generations. Thanks to technological
            advancements in archaeological investigations, such as remote
            sensing techniques, 3D modeling, and advanced imaging, we can now
            document, conserve, and restore ancient sites and artifacts
            associated with Hindu dynasties with greater accuracy.
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
