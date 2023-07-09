import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  image: string;
  description: string;
  circles: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "Tamil Nadu",
    image:
      "https://i.ibb.co/StBVG54/445b818b2259989b6ff32db37facaeba-removebg-preview.png",
    description: `Tamil Nadu, located in the southern part of India, is a land steeped in rich heritage and cultural significance. Renowned for its ancient temples, magnificent architecture, vibrant festivals, and classical arts, Tamil Nadu boasts a legacy that spans over thousands of years.
    The state's cultural heritage is also exemplified through its literature and music. Tamil literature, with its ancient Sangam poetry and works of renowned poets like Thiruvalluvar and Subramania Bharati, reflects the profound wisdom and beauty of Tamil Nadu's intellectual heritage. The soul-stirring compositions of Carnatic music, performed in traditional concerts and festivals, add to the state's cultural richness.
    Tamil Nadu's heritage is not just a relic of the past; it is a vibrant and living testament to the people's deep-rooted traditions and cultural pride. The preservation and celebration of this heritage contribute to the state's unique identity and make it a captivating destination for travelers and enthusiasts alike.`,
    circles: ["Chennai", "Thanjavour", "Madurai"],
  });
}
