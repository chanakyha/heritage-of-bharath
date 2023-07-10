import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-96px)]  w-screen bg-secondary py-10">
      <div className="max-w-5xl text-center mx-auto flex flex-col gap-3">
        <h1 className="text-4xl text-center font-martalsans font-extrabold text-yellow-900">
          About the Project
        </h1>

        <div className="mt-10">
          <h1 className="font-bold text-xl font-martalsans">
            Welcome to our project on the Cultural Impact of Hindu Dynasties!{" "}
          </h1>
          <p className="text-sm font-medium">
            This fascinating study explores the historical and contemporary
            influences of Hindu dynasties on global societies. By delving into
            ancient sites, historical cities, and temples, we aim to uncover the
            rich cultural, religious, architectural, and artistic legacies left
            behind by these dynasties.
          </p>
        </div>
        <div className="mt-10 flex  flex-col items-center">
          <h1 className="font-bold text-xl font-martalsans">
            Why is this project important?
          </h1>
          <Image
            width={1080}
            height={1920}
            src="https://res.cloudinary.com/dxzzsxitt/image/upload/v1689030646/Screenshot_from_2023-07-11_04-07-09-removebg-preview_x3gapt.png"
            alt="image"
            className="w-96"
          />
          <div className="gap-8 flex flex-col">
            <p className="text-sm text-justify font-medium">
              Firstly, it focuses on the preservation of cultural heritage.
              Hindu dynasties have contributed immensely to the world art,
              architecture, literature, and religious practices. By studying
              their cultural impact, we can better understand and safeguard this
              invaluable heritage for future generations. Thanks to
              technological advancements in archaeological investigations, such
              as remote sensing techniques, 3D modeling, and advanced imaging,
              we can now document, conserve, and restore ancient sites and
              artifacts associated with Hindu dynasties with greater accuracy.
            </p>
            <p className="text-sm text-justify font-medium">
              Secondly, this project highlights the interconnectedness of global
              societies. Hindu dynasties were not confined to a single region
              but had far-reaching influences. Exploring their cultural impact
              helps us recognize the exchange of ideas, trade routes, and
              cross-cultural interactions that shaped the development of
              civilizations across continents.
            </p>
            <p className="text-sm text-justify font-medium">
              Furthermore, by studying the cultural impact of Hindu dynasties,
              we gain insights into religious practices. Hinduism, with its
              diverse rituals, beliefs, and philosophies, has had a profound
              influence on religious practices worldwide. This project sheds
              light on the spread and adaptation of Hindu religious practices,
              such as temple construction, iconography, and the worship of
              deities, in different parts of the world.
            </p>
            <p className="text-sm text-justify font-medium">
              Moreover, Hindu dynasties have been renowned for their
              architectural and artistic marvels. Grand temples, palaces, and
              monuments stand as testaments to their exceptional craftsmanship,
              intricate designs, and unique architectural styles. By analyzing
              the cultural impact of Hindu dynasties, we can trace the
              influences of Hindu architecture and art on global architectural
              traditions, urban planning, and artistic expressions.
            </p>
            <p className="text-sm text-justify font-medium">
              Additionally, the rise and fall of Hindu dynasties often coincide
              with significant socio-economic changes in the regions they ruled.
              By studying their cultural impact, we gain insights into the
              economic systems, trade networks, agrarian practices, and social
              structures prevalent during those times. This knowledge helps us
              understand the historical dynamics of economic development and
              societal transformations in different regions.
            </p>
            <p className="text-sm text-justify font-medium">
              Lastly, the cultural impact of Hindu dynasties continues to
              resonate in the present day. The practices, traditions, and
              philosophies influenced by these dynasties are still observed and
              celebrated in various parts of the world. This project explores
              their cultural impact to understand the continuity and evolution
              of these traditions and their significance in contemporary
              societies.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-xl font-martalsans">Objectives</h1>
          <p className="text-sm font-medium">
            Our project encompasses several objectives to achieve a
            comprehensive understanding of the cultural impact of Hindu
            dynasties. We will develop assessment metrics to identify and
            evaluate the condition of temples and archaeological sites
            associated with these dynasties, ensuring effective preservation
            efforts. We will create structured metadata of ancient inscriptions,
            enabling better interpretation and analysis of historical events.
            Utilizing technological advancements, we will construct a 3D
            geospatial model that represents the architectural heritage of Hindu
            dynasties, allowing immersive visualization of these magnificent
            structures. Moreover, we will explore the influence and significance
            of cultural heritage on societal development, analyzing the impact
            on art, architecture, religion, and cultural practices. Lastly, we
            will design a standardized documentation and metadata framework for
            Indian manuscripts and inscriptions, enhancing accessibility and
            exchange of knowledge among researchers and institutions worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
