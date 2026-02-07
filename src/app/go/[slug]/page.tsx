import { featuredTools } from "@/data/tools";
import type { Metadata } from "next";
import GoRedirectClient from "./GoRedirectClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = featuredTools.find((t) => t.id === slug);
  return {
    title: tool ? `Redirecționare către ${tool.name}` : "Redirecționare",
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
  const targetUrl = tool ? tool.affiliateUrl : "/instrumente";

  return <GoRedirectClient slug={slug} targetUrl={targetUrl} toolName={tool?.name} />;
}
