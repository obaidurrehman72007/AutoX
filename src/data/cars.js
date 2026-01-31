// src/data/cars.js
const imageBase = "/Images/";

export const luxuryCars = [
  {
    name: "Mercedes-AMG G63",
    slug: "mercedes-amg-g63",
    paragraph:
      "The quintessential everyday supercar. It combines breathtaking performance with legendary reliability and practicality.",
    mainImage: `${imageBase}G63/g-main.avif`,
    detailImages: [
      `${imageBase}G63/g-1.avif`,
      `${imageBase}G63/g-2.avif`,
    ],
    features: [
      "Extreme Horsepower: Powered by a 3.8-liter twin-turbocharged flat-six engine producing 640 horsepower.",
      "Offers a high level of customization with premium materials like leather, carbon fiber, and Alcantara throughout the cabin.",
      "Equipped with a large central touchscreen (10.9 inches) running the latest Porsche Communication Management (PCM) system, including Apple CarPlay and other connectivity features.",
    ],
  },
  {
    name: "Porsche 911 Turbo S",
    slug: "porsche-911-turbo-s",
    paragraph:
      "The quintessential everyday supercar. It combines breathtaking performance with legendary reliability and practicality.",
    mainImage: `${imageBase}Porsche/p-main.avif`,
    detailImages: [
      `${imageBase}Porsche/david-ford-ZN3tfm4Mpk8-unsplash.avif`,
      `${imageBase}Porsche/david-ford-S7bRdvGDUPA-unsplash.avif`,
    ],
    features: [
      "Extreme Horsepower: Powered by a 3.8-liter twin-turbocharged flat-six engine producing 640 horsepower.",
      "Offers a high level of customization with premium materials like leather, carbon fiber, and Alcantara throughout the cabin.",
      "Equipped with a large central touchscreen (10.9 inches) running the latest Porsche Communication Management (PCM) system, including Apple CarPlay and other connectivity features.",
    ],
  },
  {
    name: "Ferrari SF90 Stradale",
    slug: "ferrari-sf90-stradale",
    paragraph:
      "The Pinnacle of Hybrid Tech: Ferrari's most powerful production car ever at its launch. A plug-in hybrid hypercar that delivers insane performance with shocking efficiency.",
    mainImage: `${imageBase}Ferrari/f-main.avif`,
    detailImages: [
      `${imageBase}Ferrari/f-1.avif`,
      `${imageBase}Ferrari/f-2.avif`,
    ],
    features: [
      "This is the car's defining characteristic. It's Ferrari's first series production plug-in hybrid (PHEV), representing a massive technological shift for the brand.",
      "The hybrid system isn't for efficiency; it's for staggering power and acceleration.",
      "The SF90 Stradale's design is dominated by its focus on generating downforce without the drag of a large fixed wing.",
    ],
  },
  {
    name: "Nissan GT-R (R35)",
    slug: "nissan-gt-r-r35",
    paragraph:
      "A technological tour-de-force. The Nismo version is the ultimate evolution of the R35, honed for the track with advanced all-wheel drive and a hand-built engine.",
    mainImage: `${imageBase}NissanGtr/g-main.avif`,
    detailImages: [
      `${imageBase}NissanGtr/g-1.avif`,
      `${imageBase}NissanGtr/g-2.avif`,
    ],
    features: [
      "This is the heart of the GT-R's legendary performance. It's not just about power; it's about how that power is delivered.",
      "The GT-R's transmission is a key component of its identity and performance envelope.",
      "The foundation that allows the powertrain to work so effectively is a highly advanced and rigid chassis.",
    ],
  },
  {
    name: "McLaren 750S",
    slug: "mclaren-750s",
    paragraph:
      "The Lightweight Weapon: The evolution of the legendary 720S, focused on being lighter, faster, and more engaging. It represents the peak of McLaren's supercar series.",
    mainImage: `${imageBase}Maclaren/m-main.avif`,
    detailImages: [
      `${imageBase}Maclaren/m-1.avif`,
      `${imageBase}Maclaren/m-2.avif`,
    ],
    features: [
      "This is the core of the 750S's performance philosophy. It's not just about more power; it's about less weight and sharper response.",
      "McLaren focused intensely on chassis dynamics and driver feel, areas where it fiercely competes.",
      "Every change in the cabin and on the body is designed to enhance the driving experience.",
    ],
  },
  {
    name: "Lamborghini Revuelto",
    slug: "lamborghini-revuelto",
    paragraph:
      "The first V12 hybrid Lamborghini, replacing the Aventador. It's a dramatic, electrified hypercar with staggering power and jaw-dropping presence.",
    mainImage: `${imageBase}Lamborgini/l-main.avif`,
    detailImages: [
      `${imageBase}Lamborgini/l-1.avif`,
      `${imageBase}Lamborgini/l-2.avif`,
    ],
    features: [
      "This is the heart of the Revuelto and its most defining characteristic, marking Lamborghini's entry into the hybrid era.",
      "The Revuelto's chassis is a leap forward in materials science and structural design, necessary to handle the new hybrid powertrain's weight and power.",
      "The design is not just for show; every line and vent is engineered to maximize aerodynamic efficiency and cooling for the hybrid system.",
    ],
  },
  {
    name: "Bugatti Chiron",
    slug: "bugatti-chiron",
    paragraph:
      "The ultimate hypercar, blending luxury and speed in a record-breaking package.",
    mainImage: `${imageBase}Bugatti/b-main.avif`,
    detailImages: [
      `${imageBase}Bugatti/b-2.avif`,
      `${imageBase}Bugatti/b-1.avif`,
    ],
    features: [
      "Quad-turbocharged 8.0-liter W16 producing 1,479 horsepower.",
      "Top speed electronically limited to 420 km/h.",
      "Hand-crafted interior with bespoke materials and personalization options.",
    ],
  },
  {
    name: "Aston Martin DBS Superleggera",
    slug: "aston-martin-dbs-superleggera",
    paragraph:
      "A grand tourer that perfectly balances elegance and blistering performance.",
    mainImage: `${imageBase}Aston/a-1.avif`,
    detailImages: [
      `${imageBase}Aston/a-2.avif`,
      `${imageBase}Aston/a-3.avif`,
    ],
    features: [
      "Powered by a 5.2-liter twin-turbo V12 generating 715 horsepower.",
      "Carbon fiber body panels reduce weight while enhancing beauty.",
      "Lavish cabin with advanced infotainment and Bang & Olufsen sound system.",
    ],
  },
  {
    name: "Mercedes-AMG GT Black Series",
    slug: "mercedes-amg-gt-black-series",
    paragraph:
      "Track-focused engineering meets everyday drivability in this AMG masterpiece.",
    mainImage: `${imageBase}Mercedes/m-1.avif`,
    detailImages: [
      `${imageBase}Mercedes/m-2.avif`,
      `${imageBase}Mercedes/m-3.avif`,
    ],
    features: [
      "4.0-liter twin-turbo V8 tuned to 720 horsepower.",
      "Massive carbon fiber rear wing for downforce on track.",
      "World-class brakes and suspension tuned for Nürburgring records.",
    ],
  },
  {
    name: "Nissan GT-R Nismo",
    slug: "nissan-gt-r-nismo",
    paragraph:
      "A Japanese legend, delivering relentless acceleration and all-weather usability.",
    mainImage: `${imageBase}Nissan/n-1.avif`,
    detailImages: [
      `${imageBase}Nissan/n-2.avif`,
      `${imageBase}Nissan/n-3.avif`,
    ],
    features: [
      "Hand-built 3.8-liter twin-turbo V6 producing 600 horsepower.",
      "Sophisticated all-wheel-drive system for maximum grip.",
      "Aggressive aero kit developed with motorsport expertise.",
    ],
  },
  {
    name: "Chevrolet Corvette C8 Z06",
    slug: "chevrolet-corvette-c8-z06",
    paragraph:
      "America’s mid-engine supercar, redefining value and performance in one sleek package.",
    mainImage: `${imageBase}Corvette/c-1.avif`,
    detailImages: [
      `${imageBase}Corvette/c-2.avif`,
      `${imageBase}Corvette/c-3.avif`,
    ],
    features: [
      "5.5-liter naturally aspirated flat-plane crank V8 with 670 horsepower.",
      "Exotic mid-engine layout enhances balance and handling.",
      "Track-focused aerodynamics with optional carbon fiber aero package.",
    ],
  },
  {
    name: "Koenigsegg Jesko",
    slug: "koenigsegg-jesko",
    paragraph:
      "Swedish engineering at its peak, designed to break records and redefine hypercars.",
    mainImage: `${imageBase}Koenigsegg/k-1.avif`,
    detailImages: [
      `${imageBase}Koenigsegg/k-2.avif`,
      `${imageBase}Koenigsegg/k-3.avif`,
    ],
    features: [
      "5.0-liter twin-turbo V8 pushing up to 1,600 horsepower on E85 fuel.",
      "Lightweight carbon fiber construction for maximum efficiency.",
      "Next-generation 9-speed multi-clutch transmission for lightning-fast shifts.",
    ],
  },
];

export const carBrands = [
  {
    name: "Porsche",
    url: "https://www.porsche.com/usa/",
    logo: `${imageBase}Logos/porsche.avif`,
  },
  {
    name: "Ferrari",
    url: "https://www.ferrari.com/",
    logo: `${imageBase}Logos/ferrari.avif`,
  },
  {
    name: "Lamborghini",
    url: "https://www.lamborghini.com/en-en",
    logo: `${imageBase}Logos/lamborgini.avif`,
  },
  {
    name: "McLaren",
    url: "https://www.mclaren.com/",
    logo: `${imageBase}Logos/mclaren.avif`,
  },
  {
    name: "Nissan GT-R",
    url: "https://www.gtr.com.pk/",
    logo: `${imageBase}Logos/GTR.avif`,
  },
  {
    name: "Bugatti",
    url: "https://www.bugatti.com/",
    logo: `${imageBase}Logos/Bugatti.avif`,
  },
  {
    name: "Aston Martin",
    url: "https://www.astonmartin.com/en",
    logo: `${imageBase}Logos/Aston-Martin.avif`,
  },
  {
    name: "Chevrolet",
    url: "https://www.chevrolet.com/",
    logo: `${imageBase}Logos/chevrolet.avif`,
  },
  {
    name: "Mercedes-AMG",
    url: "https://www.mercedes-amg.com/",
    logo: `${imageBase}Logos/mercedes-amg.avif`,
  },
  {
    name: "Koenigsegg",
    url: "https://www.koenigsegg.com/home",
    logo: `${imageBase}Logos/Koenigsegg.avif`,
  },
  {
    name: "Mercedes-Benz",
    url: "https://www.mercedes-benz.com/en/",
    logo: `${imageBase}Logos/Mercedes-Benz.avif`,
  },
];