import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahsan Malik",
  description: "my name is ahsan malik I am a full stack web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Theme>
          <DarkLight/>
          {children}</Theme></body>
    </html>
  );
}
