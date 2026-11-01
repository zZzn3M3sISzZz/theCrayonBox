import type { Metadata } from "next";
import { JournalArticle } from "@/components/journal-article";
import { choosingPreschoolArticle, recentArticles } from "@/content/choosing-preschool";

export const metadata: Metadata = {
  title: choosingPreschoolArticle.title,
  description: choosingPreschoolArticle.intro[0],
};

export default function ChoosingPreschoolArticlePage() {
  return <JournalArticle article={choosingPreschoolArticle} recentArticles={recentArticles} />;
}
