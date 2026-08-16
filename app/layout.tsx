// app/layout.tsx
import "./globals.css";
import { Zen_Kaku_Gothic_New, Cormorant_Garamond, Lora } from "next/font/google";
import Script from "next/script";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku",
  display: "swap",
});

// Classical デザインシステムの欧文書体（見出し / 本文）。
// 和文グリフは持たないため、CSS側で Zen Kaku にフォールバックさせている。
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "トキ映像製作所",
  description: "今日を、いつか振り返りたい時に。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${cormorant.variable} ${lora.variable}`}
    >
      <head>
        {/* Adobe Fonts (VDL-PenLetter) */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'yjo6mvo',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){
                  h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";
                },config.scriptTimeout),
                tk=d.createElement("script"),f=false,
                s=d.getElementsByTagName("script")[0],a;
                h.className+=" wf-loading";
                tk.src='https://use.typekit.net/'+config.kitId+'.js';
                tk.async=true;
                tk.onload=tk.onreadystatechange=function(){
                  a=this.readyState;
                  if(f||a&&a!="complete"&&a!="loaded") return;
                  f=true;clearTimeout(t);
                  try{Typekit.load(config)}catch(e){}
                };
                s.parentNode.insertBefore(tk,s)
              })(document);
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}