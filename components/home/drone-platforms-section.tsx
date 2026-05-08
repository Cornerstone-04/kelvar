"use client";

import { drones } from "@/lib/data";
import DronePlatformRow from "@/components/home/drone-platform-row";

export function DronePlatformsSection() {
  return (
    <section id="platforms" className="border-t border-[#ffffff12]">
      {drones.map((drone, i) => (
        <DronePlatformRow key={drone.id} drone={drone} index={i} />
      ))}
    </section>
  );
}
