import type { Metadata } from "next";
import { Bebas_Neue, Crimson_Pro, Inter } from "next/font/google"; // Added Inter
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Added Inter for clean modern body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TRUE STAR VENTURES | Multifaceted Construction, Engineering, IT & Digital Services",
  description: "Comprehensive solutions across construction, engineering, modular systems, IT infrastructure, digital transformation, and facility management. Turnkey project delivery with proven expertise.",
  keywords: ["construction", "engineering", "IT solutions", "digital marketing", "facility management", "digital transformation", "MEP projects", "porta cabin", "CCTV security"],
  openGraph: {
    title: "TRUE STAR VENTURES",
    description: "Multifaceted Provider of Construction, Engineering, Modular Solutions, Maintenance & IT/Digital Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${bebasNeue.variable} ${crimsonPro.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
