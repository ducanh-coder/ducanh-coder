import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Ngọc Rồng Online - Cộng đồng, hướng dẫn, tải game",
    template: "%s | Ngọc Rồng Online",
  },
  description:
    "Cộng đồng Ngọc Rồng Online: hướng dẫn tân thủ, tải game, sự kiện và bảng xếp hạng.",
  keywords: [
    "Ngọc Rồng Online",
    "NRO",
    "Dragon Ball",
    "tải game",
    "hướng dẫn",
    "sự kiện",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ngọc Rồng Online",
    description:
      "Cộng đồng Ngọc Rồng Online: hướng dẫn tân thủ, tải game, sự kiện và bảng xếp hạng.",
    url: "/",
    siteName: "Ngọc Rồng Online",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
