import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CEM - Comunidade Evangélica de Miami",
  description: "Igreja Cristã <br/> Sua igreja brasileira em Miami 🇧🇷 <br/> Cultos todas às Quintas 8pm (nas casas) <br/> Todos os Domingos às 6pm <br/> 15120 West Dixie Hwy, North Miami Beach, Florida 33162",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
