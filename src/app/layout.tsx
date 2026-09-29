import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Marketing LABZ | AI-Powered Digital Marketing in the UAE",
    template: "%s | AI Marketing LABZ",
  },
  description:
    "AI Marketing LABZ is a next-generation digital marketing agency in the UAE, combining artificial intelligence, creative strategy and performance marketing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-black font-sans text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
