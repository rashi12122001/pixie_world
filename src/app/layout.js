import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/Fireflies";

const inter = Inter({ subsets: ["latin"] ,
  variable: "--font-inter",

});

export const metadata = {
  title: "next js project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable,"bg-background text-foreground font-inter")}>{children}</body>
      <FireFliesBackground/>
    </html>
  );
}
