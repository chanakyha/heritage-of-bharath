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
            The city of Ahmedabad is blessed with a rich architectural legacy
            that is essential to the preservation of the local culture and
            history. Trade and business have a long history there. It is a
            thriving commercial metropolis where the spirit of entrepreneurship
            is still prevalent. The city served as the focal point of the
            nonviolent liberation struggle that resulted in the nation&apos;s
            1947 independence from colonial rule. Over twenty ASI designated
            monuments and sites total 2600 historic sites. In addition to these,
            Ahmedabad&apos;s Pols are regarded as one of the best creations that
            are steeped in history.
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
