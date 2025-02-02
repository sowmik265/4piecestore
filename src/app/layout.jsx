import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4PieceShop",
  description: "A ecommerce Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </WixClientContextProvider>
      </body>
    </html>
  );
}
