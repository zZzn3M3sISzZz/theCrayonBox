import type { Metadata } from "next";
import { JournalArticle } from "@/components/journal-article";
import { recentArticles, teachersArticle } from "@/content/teachers";

export const metadata: Metadata = {
  title: teachersArticle.title,
  description: teachersArticle.intro[0],
};

export default function TeachersArticlePage() {
  return <JournalArticle article={teachersArticle} recentArticles={recentArticles} />;
}
