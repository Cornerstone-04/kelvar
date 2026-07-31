import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Platform Redirect",
  description:
    "This legacy platform URL redirects to the Kelvar Industries platform portfolio.",
  path: "/",
  keywords: ["Kelvar platforms"],
  noIndex: true,
});

export function generateStaticParams() {
  return [{ slug: "dome" }];
}

export default async function DronePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/#${slug}`);
}
