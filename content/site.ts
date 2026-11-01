export const school = {
  name: "The Crayon Box",
  phoneDisplay: "+91 81245 21521",
  phoneHref: "tel:+918124521521",
  email: "thecrayonboxplayschool@yahoo.com",
  address: [
    "No. 14, Manjolai 1st Main Road",
    "Kalaimagal Nagar, Ekkaduthangal",
    "Chennai 600032",
  ],
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=80.1908%2C13.0188%2C80.2148%2C13.0348&layer=mapnik&marker=13.026746%2C80.202828",
  mapLink: "https://www.openstreetmap.org/?mlat=13.026746&mlon=80.202828#map=16/13.026746/80.202828",
};

export const nav = [
  { href: "/programmes", label: "Programmes" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact", arrow: true },
] as const;

export type NavItem = (typeof nav)[number];
