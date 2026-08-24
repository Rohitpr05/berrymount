import { site } from "./site";

export type Location = {
  id: string;
  name: string;
  address: string[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  lat: number;
  lng: number;
};

export const locations: Location[] = [
  {
    id: "head-office",
    name: "Head Office",
    address: [site.address.line1, site.address.line2, site.address.line3],
    phone: site.phone,
    phoneHref: site.phoneHref,
    email: site.email,
    emailHref: site.emailHref,
    lat: site.coordinates.lat,
    lng: site.coordinates.lng,
  },
];
