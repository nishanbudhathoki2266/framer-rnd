import { Anek_Bangla, Exo } from "next/font/google";
import "./globals.css";
import Handles from "@/components/Handles";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Nishan Budhathoki",
  description: "Framer motion play around.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <main className="relative">
          {children}
          <Handles />
        </main>
      </body>
    </html>
  );
}
