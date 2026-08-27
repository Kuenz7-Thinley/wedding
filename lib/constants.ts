export const WEDDING_DATE = new Date("2027-06-12T09:30:00+09:00");

export const VENUE = {
  mapsUrl: "https://maps.google.com/?q=Happo-en+Shirokanedai+Tokyo",
  website: "https://happo-en.com/",
};

export const HOTELS = [
  {
    image: "/images/pages/shinagawa-price-hotel.jpg",
    url: "https://www.princehotels.com/shinagawa/",
    nameKey: "travel.hotel1.name" as const,
    descKey: "travel.hotel1.desc" as const,
    altKey: "images.hotel1" as const,
  },
  {
    image: "/images/pages/prince-park-tower.jpg",
    url: "https://www.princehotels.com/parktower/",
    nameKey: "travel.hotel2.name" as const,
    descKey: "travel.hotel2.desc" as const,
    altKey: "images.hotel2" as const,
  },
];

export const SCHEDULE_ITEMS = [1, 2, 3, 4, 5] as const;

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "/details", labelKey: "nav.details" as const },
  { href: "/travel", labelKey: "nav.travel" as const },
  { href: "/rsvp", labelKey: "nav.rsvp" as const },
  { href: "/schedule", labelKey: "nav.schedule" as const },
];

export const COUPLE_GALLERY_IMAGES = [
  "/images/couple/bhutanese_2.png",
  "/images/couple/bhutanses_1.png",
  "/images/couple/japanese_1.png",
  "/images/couple/suits.png",
  "/images/couple/hero.png",
] as const;

export const COLLAGE_CARDS = [
  { href: "/schedule", image: "/images/pages/schedule.png", labelKey: "home.card.schedule" as const },
  { href: "/rsvp", image: "/images/pages/rsvp.png", labelKey: "home.card.rsvp" as const },
  { href: "/details", image: "/images/pages/venue.jpg", labelKey: "home.card.details" as const },
  { href: "/travel", image: "/images/pages/travel_and_stay.png", labelKey: "home.card.travel" as const },
];
