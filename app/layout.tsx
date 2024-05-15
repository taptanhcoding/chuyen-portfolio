import type { Metadata } from "next";
import { nunito } from "@/styles/font"
import "./globals.scss";
import Provider from "./provider";
import 'aos/dist/aos.css'; // You can also use <link> for styles

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Chuyen Lee portfolio",
  description: "Something about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${nunito.className} scroll-smooth `}>
        <Provider>{children}</Provider>
        </body>
    </html>
  );
}
