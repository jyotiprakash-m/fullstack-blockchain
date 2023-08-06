import "./globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BARN Application",
  description: "Fullstack Blockchain Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
