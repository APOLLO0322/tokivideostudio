"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#F8F5F0] flex flex-col items-center pt-[6vh] pb-12 px-4 relative">
      {/* 動画エリア */}
      <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-md">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/hero.mp4"
        />
      </div>

      {/* キャッチテキスト */}
<p className="mt-8 text-center text-[#5D523D] text-sm tracking-[0.15em] font-medium">
  今日を、いつか振り返りたい時に。
</p>


      {/* ロゴボタン（クリックで別ページへ） */}
      <div className="absolute bottom-8 w-full flex justify-center z-10">
        <Link href="/home">
          <img
            src="/tokiclocklogo.png"
            alt="Go to Home"
            className="w-16 h-16 hover:opacity-80 transition cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
}