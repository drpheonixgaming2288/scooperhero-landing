import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waitlist - ScooperHero",
  description: "Discover our user-friendly mobile app designed for busy dog owners to effortlessly maintain a clean yard. Connect with professional pooper scoopers who ensure reliability, quality service, and convenience. Join a community of dog lovers and keep your environment clean and healthy. Waitlist now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
