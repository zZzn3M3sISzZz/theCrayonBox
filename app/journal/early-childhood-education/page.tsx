import type { Metadata } from "next";
import { JournalArticle } from "@/components/journal-article";
import { earlyChildhoodArticle, recentArticles } from "@/content/early-childhood";

export const metadata: Metadata = {
  title: earlyChildhoodArticle.title,
  description: earlyChildhoodArticle.intro[0],
};

export default function EarlyChildhoodArticlePage() {
  return <JournalArticle article={earlyChildhoodArticle} recentArticles={recentArticles} />;
}
