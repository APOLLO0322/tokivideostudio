// PinnedSplitMobile.tsx
"use client";

export default function PinnedSplitMobile() {
  return (
    <section className="w-full flex flex-col bg-[#F8F5F0]">
      <div className="w-full h-[240px] overflow-hidden sticky top-0 z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/top-2-sp.mp4"
        />
      </div>
      
{/* ✅ テキストエリア（スクロールで流れる） */}
      <div className="md:w-1/2 w-full px-8 md:px-24 py-16 relative min-h-screen">
        <h3 className="text-2xl text-center font-bold md:text-3xl tracking-wider mb-1">
          ご自宅での撮影
        </h3>
        <p className="font-pen text-sm text-center tracking-[0.15em] mb-10 text-[#D2B48C] italic">
          Home is Where the Story Lives.
        </p>
        <div className="space-y-8 text-[10px] md:text-[14px] leading-[3] tracking-[0.08em] mb-24 text-gray-700">
          <p>家にいるときが、一番ありのままだから</p>
          <p>
            「プロに撮ってもらう」って考えると何かの記念日じゃないと頼みづらいとか
            <br />
            おしゃれしてるときじゃないととか
            <br />
            どこか遠くに遊びにいくときにとか
            <br />
            ちょっと気合いを入れなきゃいけないイベントになっちゃいませんか。
          </p>
          <p>
            でも、トキ映像製作所はあなたの「日常」に寄り添いたいと
            <br />
            心から思っています。
          </p>
          <p>
            家にいる時のあなたの姿や、大切な家族の姿は
            <br />
            どれくらいデータフォルダに残っていますか。
            <br />
            わざわざ撮るような出来事もないしって思う日の方が多いかもしれないですが
            <br />
            でもいつか、いつも通りだった今日を懐かしく思う日が来ます。
          </p>
          <p>
            たくさんの思い出が色褪せずに残っているということは、少し先の未来でも、
            <br />
            ものすごく愛に溢れたプレゼントになると思うから。
          </p>
          <p>
            大切な日々が、この先もずっとあなたの側にあり続けるように。
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
    </section>
  );
}