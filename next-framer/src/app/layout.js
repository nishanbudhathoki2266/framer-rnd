import { Anek_Bangla, Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Framer Motion R&D",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
