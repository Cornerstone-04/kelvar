import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KELVARX — Kelvar Industries",
  description:
    "Kelvar Industries' advanced aerospace, atmospheric intelligence, and near-space systems programme.",
};

export default function KelvarxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
