import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.berrymount.ae"),
  title: {
    default: "Berrymount | Fresh, Fine, Flavourful Berries — UAE",
    template: "%s | Berrymount",
  },
  description:
    "Berrymount supplies premium strawberries, blueberries, raspberries and blackberries across the UAE — sourced with care, delivered fresh, trusted by retailers, hotels and food service.",
  openGraph: {
    title: "Berrymount | Fresh, Fine, Flavourful Berries — UAE",
    description:
      "Premium berries sourced with care and delivered fresh across the UAE. Explore our range and partner with Berrymount for reliable supply.",
    url: "https://www.berrymount.ae",
    siteName: "Berrymount",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berrymount | Fresh, Fine, Flavourful Berries — UAE",
    description:
      "Premium berries sourced with care and delivered fresh across the UAE.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-plum-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
