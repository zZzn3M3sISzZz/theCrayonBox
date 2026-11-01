import type { Metadata } from "next";
import { JournalArticle } from "@/components/journal-article";
import { playBasedArticle, recentArticles } from "@/content/play-based";

export const metadata: Metadata = {
  title: playBasedArticle.title,
  description: playBasedArticle.intro[0],
};

export default function PlayBasedArticlePage() {
  return <JournalArticle article={playBasedArticle} recentArticles={recentArticles} />;
}
