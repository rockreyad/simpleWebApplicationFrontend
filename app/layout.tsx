import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import "./globals.css";
import { Rajdhani } from "@next/font/google";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${rajdhani.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
