import { images } from "./images";

export type Berry = {
  slug: string;
  name: string;
  index: string;
  tagline: string;
  description: string;
  uses: string[];
  benefits: string[];
  accent: "strawberry" | "blueberry" | "raspberry" | "blackberry";
  atmosphere: string;
  image: (typeof images)[keyof typeof images];
  heroImage: (typeof images)[keyof typeof images];
  moodyImage: (typeof images)[keyof typeof images];
};

export const berries: Berry[] = [
  {
    slug: "strawberries",
    name: "Strawberries",
    index: "01",
    tagline: "Naturally sweet, always juicy",
    description:
      "Naturally sweet and bursting with flavour, our strawberries strike a perfect balance of juiciness and freshness in every punnet.",
    uses: ["Fresh snacking", "Smoothies", "Desserts", "Salads"],
    benefits: ["Rich in vitamin C", "Good source of antioxidants", "Supports heart health"],
    accent: "strawberry",
    atmosphere: "#3d0f1c",
    image: images.strawberryBowl,
    heroImage: images.strawberryMacro,
    moodyImage: images.strawberryMoody,
  },
  {
    slug: "blueberries",
    name: "Blueberries",
    index: "02",
    tagline: "Small berry, big flavour",
    description:
      "A burst of flavour in every bite — sweet with a gentle tang, and as refreshing as it is nutritious.",
    uses: ["Fresh snacking", "Smoothies", "Yoghurt topping", "Baked goods", "Breakfast bowls"],
    benefits: ["Rich in antioxidants", "Good source of vitamins"],
    accent: "blueberry",
    atmosphere: "#141d3d",
    image: images.blueberryBowl,
    heroImage: images.blueberryBowl,
    moodyImage: images.blueberryMoody,
  },
  {
    slug: "raspberries",
    name: "Raspberries",
    index: "03",
    tagline: "Hand-picked at peak ripeness",
    description:
      "The perfect combination of sweet and tangy, offering a burst of refreshing flavour — hand-picked at peak ripeness for the best possible taste.",
    uses: ["Fresh snacking", "Smoothies", "Oatmeal topping", "Salads", "Desserts", "Baked goods"],
    benefits: ["Natural sweetness with a tangy kick"],
    accent: "raspberry",
    atmosphere: "#420f28",
    image: images.raspberryPunnets,
    heroImage: images.raspberryMoody,
    moodyImage: images.raspberryRustic,
  },
  {
    slug: "blackberries",
    name: "Blackberries",
    index: "04",
    tagline: "Sweet, tangy, unmistakably rich",
    description:
      "A delicious combination of sweet and tangy, offering a juicy burst of flavour — natural sweetness and a slight tartness create a perfect balance.",
    uses: ["Fresh snacking", "Smoothies", "Desserts", "Salads", "Baked goods"],
    benefits: ["Naturally sweet and tart balance"],
    accent: "blackberry",
    atmosphere: "#1f1329",
    image: images.blackberryStack,
    heroImage: images.blackberryStack,
    moodyImage: images.blackberryVine,
  },
];

export function getBerryBySlug(slug: string) {
  return berries.find((b) => b.slug === slug);
}
