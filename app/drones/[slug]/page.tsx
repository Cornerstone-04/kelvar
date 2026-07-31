import { redirect } from "next/navigation";

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
