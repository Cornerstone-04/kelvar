import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Kelvar Industries",
  description: "",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
