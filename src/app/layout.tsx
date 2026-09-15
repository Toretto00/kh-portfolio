import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";

export const metadata: Metadata = {
  title: "Cim Hang Tran",
  description:
    "This portfolio highlights CimHang's life, interests, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText
              `}
        suppressHydrationWarning
      >
        <LenisScroll>
          {/* GSAP SCROLLTRIGGER */}
          <Scroll>
            {/* ENABLES DARK AND LIGHT MODE */}
            <Provider>
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
