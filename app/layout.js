import localFont from "next/font/local";
import "./globals.scss";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const gjensidigeFont = localFont({
  src: [
    {
      path: "./fonts/GjenBrownOT-Regular.woff2",
      display: "swap",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/GjenBrownOT-Light.woff2",
      display: "swap",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GjenBrownOT-Bold.woff2",
      display: "swap",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Next test",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gjensidigeFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
