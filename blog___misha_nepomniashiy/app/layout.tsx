import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header, Providers } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Next App",
  description: "Here is a root layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
