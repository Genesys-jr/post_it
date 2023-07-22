import "./globals.css";

import Nav from "./auth/Nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-49 lg:mx-96 ${roboto.variable} bg-gray-200`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
