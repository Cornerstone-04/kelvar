import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press — Kelvar Industries",
  description: "",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
