import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Token AI Labs",
  description:
    "Build your own bot in minutes! Go to market faster with GenAI. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex flex-col items-center overflow-x-hidden bg-none`}>
        <Navbar className={"z-50"} />
        {children}
        <Script
          id="chatbot-config"
          strategy="beforeInteractive" // Or "afterInteractive" depending on when you want the script to run
        >
          {`
          window.embeddedChatbotConfig = {
            chatbotId: "5fec40b0-390e-4a5d-a86d-e0cc9c1f7481",
            domain: "jaano.ai",
            queryexpansion: false,
            reranking: true,
          };
        `}
        </Script>
        <Script
          src="https://jaano.ai/chatbot-embedding.js"
          defer
          strategy="beforeInteractive"
          ed></Script>
      </body>
    </html>
  );
}
