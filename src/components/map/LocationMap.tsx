"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "@/data/locations";

const pinIcon = L.divIcon({
  className: "",
  html: `
    <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0Z" fill="#170b1b"/>
      <circle cx="17" cy="17" r="7.5" fill="#c6a15a"/>
    </svg>
  `,
  iconSize: [34, 44],
  iconAnchor: [17, 44],
  popupAnchor: [0, -40],
});

export function LocationMap() {
  const primary = locations[0];

  return (
    <MapContainer
      center={[primary.lat, primary.lng]}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
      aria-label="Map showing Berrymount locations"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={pinIcon}>
          <Popup>
            <div className="font-sans text-sm">
              <p className="font-semibold">{loc.name}</p>
              <p className="mt-1 text-xs">{loc.address.join(", ")}</p>
              <a
                className="mt-2 inline-block text-xs font-medium text-[#8a6733] underline"
                href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
