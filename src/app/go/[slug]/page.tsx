import { redirect } from "next/navigation";
import { featuredTools } from "@/data/tools";
import type { Metadata } from "next";
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = featuredTools.find((t) => t.id === slug);
  return {
    title: tool ? `Redirectionare catre ${tool.name}` : "Redirectionare",
    robots: { index: false, follow: false },
  };
}
export function generateStaticParams() {
  return featuredTools.map((tool) => ({
    slug: tool.id,
  }));
}
export default async function GoRedirectPage({ params }: Props) {
  const { slug } = await params;
  const tool = featuredTools.find((t) => t.id === slug);
  if (tool) {
    redirect(tool.affiliateUrl);
  }
  redirect("/instrumente");
}
