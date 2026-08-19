export const WEDDING_DATE = new Date("2027-07-12T14:30:00+09:00");

export const VENUE = {
  mapsUrl: "https://maps.google.com/?q=Happo-en+Shirokanedai+Tokyo",
  website: "https://happo-en.com/",
};

export const HOTELS = [
  {
    image: "/images/shinagawa-price-hotel.jpg",
    url: "https://www.princehotels.com/shinagawa/",
    nameKey: "travel.hotel1.name" as const,
    descKey: "travel.hotel1.desc" as const,
    altKey: "images.hotel1" as const,
  },
  {
    image: "/images/prince-park-tower.jpg",
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

export const COLLAGE_CARDS = [
  { href: "/schedule", image: "/images/venue-cover.jpeg", labelKey: "home.card.schedule" as const },
  { href: "/rsvp", image: "/images/couple-1.jpeg", labelKey: "home.card.rsvp" as const },
  { href: "/details", image: "/images/venue.jpg", labelKey: "home.card.details" as const },
  { href: "/travel", image: "/images/tavel.jpeg", labelKey: "home.card.travel" as const },
];
