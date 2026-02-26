import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stand Çadırı | Premium Stand Çadırı Çözümleri",
  description: "2x2, 3x3, 3x4,5, 3x6, 4x4 stand çadırı seçenekleri. 1985’ten beri hızlı tedarik ve farklı hava koşullarına uygun çözümler.",
  openGraph: {
    title: "Stand Çadırı | Premium Stand Çadırı Çözümleri",
    description: "2x2 - 3x3 - 3x4,5 - 3x6 - 4x4 stand çadırı seçenekleri. 1985’ten beri güven veren çözümler.",
    url: "https://standcadiri.com",
    siteName: "Stand Çadırı",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased aurora`}>
        {children}
      </body>
    </html>
  );
}
