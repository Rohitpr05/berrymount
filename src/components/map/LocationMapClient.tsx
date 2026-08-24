"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap").then((m) => m.LocationMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-200 text-sm text-plum-950/50">
      Loading map…
    </div>
  ),
});

export function LocationMapClient() {
  return <LocationMap />;
}
