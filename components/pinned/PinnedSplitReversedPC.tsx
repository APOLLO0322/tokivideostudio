"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSplitReversed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (containerRef.current && videoRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: videoRef.current,
          pinSpacing: true,
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col md:flex-row bg-[#F8F5F0]">
      {/* 左：テキスト */}
      <div className="md:w-1/2 w-full px-8 md:px-24 py-16 relative min-h-screen">
        <h3 className="text-2xl text-center font-bold md:text-3xl tracking-wider mb-1">ロケーション撮影</h3>
        <p className="font-pen text-sm text-center tracking-[0.15em] mb-10 text-[#D2B48C] italic">
          Out and About, Just being you.
        </p>
        <div className="space-y-8 text-[10px] md:text-[14px] leading-[3] tracking-[0.08em] text-gray-700 mb-16">
          <p>
            子どもの頃よく遊んだ公園を、覚えていますか。<br />
            家族と何度も見た景色は記録に残せていますか。
          </p>
          <p>
            スマホで自撮りした家族みんなで写っている写真は<br />
            あんまり自然な笑顔じゃなかったりしませんか。<br />
            シャッターを押すまでや<br />
            撮った写真を見て目をつぶっていたことを笑いあうときの方が<br />
            いつも通りの笑顔なんじゃないかなと思います。
          </p>
          <p>
            どんな声で名前を呼んで<br />
            どんな風に話して、笑っていたのか<br />
            憶えておきたい瞬間がきっと毎日<br />
            数えきれないくらいあるはずだから<br />
            トキ映像製作所は「動画」で日常を残すことにこだわっています。
          </p>
          <p>
            海や思い出のカフェなど<br />
            好きな場所で思い出を残せるロケーション撮影。<br />
            桜や新緑、紅葉など、四季を感じられるのもロケーション撮影ならではです。
          </p>
        </div>

        {/* view more ボタン */}
        <div className="absolute bottom-8 right-8">
          <a
            href="#"
            className="w-24 h-24 bg-[#E0EBE4] rounded-full flex items-center justify-center text-sm text-black hover:opacity-80 transition-all shadow-md"
          >
            view more
          </a>
        </div>
      </div>

      {/* PC表示：縦動画 */}
      <div className="hidden md:block md:w-1/2 h-screen overflow-hidden" ref={videoRef}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/top-2-pc.mp4"
        />
      </div>

      {/* スマホ表示：横動画 */}
      <div className="block md:hidden w-full h-[240px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/top-2-sp.mp4"
        />
      </div>
    </section>
  );
}