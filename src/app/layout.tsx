import { WalletContext } from "@solana/wallet-adapter-react";
import "./globals.css";
import { Inter } from "next/font/google";
import WalletContextProvider from "@/Contexts/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solana - Aditya",
  description: "All in one Solana platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WalletContextProvider>
        <body className={inter.className}>{children}</body>
      </WalletContextProvider>
    </html>
  );
}
