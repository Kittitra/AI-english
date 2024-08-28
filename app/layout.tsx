import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./component/Head";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Literacy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        <div className=" bg-slate-900 text-white">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
