import type { Metadata } from "next";
import { Radio_Canada_Big, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const radioCanada = Radio_Canada_Big({
  subsets: ["latin"],
  variable: "--font-radio",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecrayonbox.in"),
  title: {
    default: "The Crayon Box",
    template: "%s · The Crayon Box",
  },
  description:
    "A thoughtful early-learning space in Ekkaduthangal, Chennai, where children feel safe to explore, confident enough to express themselves and excited to return every day.",
  openGraph: {
    title: "The Crayon Box",
    description:
      "Where little minds grow into their own. A thoughtful early-learning space in Ekkaduthangal, Chennai.",
    siteName: "The Crayon Box",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crayon Box",
    description:
      "Where little minds grow into their own. A thoughtful early-learning space in Ekkaduthangal, Chennai.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${radioCanada.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
