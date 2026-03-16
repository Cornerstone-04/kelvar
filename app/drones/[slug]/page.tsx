import { notFound } from "next/navigation";
import { dronePages } from "@/lib/data";
import DronePageLayout from "@/components/drones/drone-page-layout";
import { Metadata } from "next";

export function generateStaticParams() {
  return dronePages.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const drone = dronePages.find((d) => d.slug === slug);
  if (!drone) return {};
  return {
    title: `${drone.name}${drone.trademark ? "™" : ""} — Kelvar Industries`,
    description: drone.tagline,
  };
}

export default async function DronePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const drone = dronePages.find((d) => d.slug === slug);
  if (!drone) notFound();
  return <DronePageLayout drone={drone} />;
}
