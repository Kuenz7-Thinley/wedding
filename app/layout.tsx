import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuenzang & Miyu | Save the Date",
  description:
    "Save the Date — Monday, July 12, 2027. Join us for our wedding celebration at Happo-en, Tokyo.",
  icons: { icon: "/images/monogram.svg" },
};

const localeBootScript = `(function(){try{var l=localStorage.getItem("wedding-locale")||"en";document.documentElement.lang=l;if(l==="ja")document.documentElement.classList.add("locale-ja");}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootScript }} />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
