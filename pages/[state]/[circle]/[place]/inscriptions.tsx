import Image from "next/image";
import { useRouter } from "next/router";

const Incriptions = () => {
  const router = useRouter();
  const { state, circle, place } = router.query;
  return (
    <div className="min-h-[calc(100vh-96px)]  w-screen bg-secondary py-10">
      <h1 className="font-extrabold text-yellow-900 capitalize text-2xl font-martalsans text-center">
        Inscriptions Located in {place},{circle},{state}
      </h1>

      <div className="my-10 max-w-5xl flex flex-col gap-10 mx-auto">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-5">
            <Image
              src="https://res.cloudinary.com/dxzzsxitt/image/upload/v1689024195/Screenshot_from_2023-07-11_02-49-18_mdtqas.png"
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
                Vishnu Dashavatara inscription Varaha cave Temple
              </h1>
              <p className="capitalize text-sm text-medium italic">
                12°37′03″N 80°11′56″E • India • {state} • {circle} • {place}
              </p>
              <p className="text-xs">
                This 7th century (or early 8th century) inscription is
                significant for several reasons. It is the earliest known stone
                inscription about the ten avatars of Vishnu, and prior to that,
                they are found in older texts. The stone inscription mentions
                the Buddha as an avatar of Vishnu in a Hindu temple. It also
                does not mention Krishna, but Balarama consistent with old Hindu
                and Jain texts of South India, the former equating Krishna to be
                identical to Vishnu.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg font-martalsans">Inscription</h1>
              <p className="text-sm font-medium font-martalsans">
                Matsyah Kurmo Varahas-cha Narasimhas-cha Vamana Ramo Ramas-cha
                Ramas-cha Buddha Kalki-cha te dasa
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg font-martalsans">Translation</h1>
              <p className="text-sm font-medium font-martalsans">
                The Fish, the Tortoise, the Boar, the Man-lion, the Dwarf,
                Parasurama, Dasarathi Rama, Balarama, Buddha and Kalki – thy
                ten.
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-lg text-red-500 text-center font-bold h-20 flex items-center justify-center text-xl shadow-black/20 shadow-sm rounded-sm">
              XML
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-start relative">
          <div className="flex flex-col sticky top-32 gap-5">
            <Image
              src="https://res.cloudinary.com/dxzzsxitt/image/upload/v1689024379/Screenshot_from_2023-07-11_02-49-43_evahxv.png"
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
                Atiranachanda Cave temple
              </h1>
              <p className="capitalize text-sm text-medium italic">
                12.6167°N 80.1917°E • India • {state} • {circle} • {place}
              </p>
              <p className="text-xs">
                Lateral Wall Inscription: A Sanskrit inscription in
                Pallava-Grantha script, it describes the majestic presence of
                Siva, the construction of the temple by Atiranachanda, and
                invokes blessings for the temple&#39;s prosperity. Copy of
                Lateral Wall Inscription: A duplicate of the above inscription,
                found on another lateral wall of the cave temple. Entrance
                Inscription: Located above the entrance, it identifies the
                temple as the Ishvara (Siva) temple of Atiranachanda-Pallava.
                Inscription Below Entrance: A Sanskrit inscription below the
                entrance, reiterating the temple&#39;s name as the Ishvara
                (Siva) temple of Atiranachanda-Pallava.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg font-martalsans">Translation</h1>
              <p className="text-sm font-medium font-martalsans">
                1.On the lateral wall of the cave temple5– language Sanskrit,
                script Pallava-grantha – the inscription runs for seventeen
                lines and consists seven verses. The translated verses are
                provided below oVerse 1 & 2 – Just as in a large lake, filled
                with water (which is fit) for bathing, (and) covered with
                various lotus-flowers, handsome Samkara (Siva) abides on the
                massive head – sprinkled with the water of coronation (and)
                covered with bright jewels of the glorious Atyantakama, who
                deprives (his) enemies of (their) pride, who is receptacle of
                wealth (Srinidhi), who possesses the charm of love (Kamaraga)
                (and) who assiduously worships Hara (Siva) oVerse 3 – For the
                welfare of the earth, he who is standing at the head of the
                lords of the earth caused to be made this house of Sambhu
                (Siva), which resembles (the mountain) Kailasa and Mandara
                oVerse 4 – Let the Sribhara be victorious for a long time, who
                bears Bhava (Siva) in (his) mind which is humbled with devotion,
                and (who bears) the earth on (his) arms like a coquettish
                ornament oVerse 5 – Atiranachanda, the lord of the rulers of the
                earth, made this (temple called) Atiranachandesvara. Let
                Pasupati (Siva) attended by the mountain-daughter (Parvati),
                Guha (Skanda), and the demi-gods (Gana), always take delight (in
                residing) here! oVerse 6 – let the eight-formed lord of beings
                (Siva) take up (his) abode for a long time in this temple
                (called) Atiranachandesvara, which was caused to be built by him
                who, together with the name Atiranachanda, owe deep devotion to
                Isana (Siva), abundant wealth, the heavy burden of the earth and
                unequaled liberality, (and) who is renowned by the
                name Ranajaya, (and) Anugrasila. oVerse 7 – Who is able to
                master the name of Kalakala, unless the performer (were)
                Bharata, Hari, Narada, or Skanda. Samaradhanamjaya (Arjuna in
                battle), Samgramadhira (he who is firm in war) 2.On another
                lateral wall of the cave temple6 – language Sanskrit, script
                Nagari – this is a copy of the above inscription, it runs for
                sixteen lines and contains only first six verses as of the above
                inscription 3.Above the entrance of the cave temple7 – language
                Sanskrit, script Pallava-grantha – reads “[The Ishvara (Siva)
                temple of] Atiranachanda-Palla[va]” 4.Below the above
                inscription8 – language Sanskrit, script Pallava-grantha – reads
                “[The Ishvara (Siva) temple of] Atiranachanda-Palla[va]”
              </p>
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

export default Incriptions;
