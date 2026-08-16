import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="bg-[#F8F5F0] w-full px-4 md:pl-48 py-20 flex flex-col md:flex-row items-center md:items-start">
      {/* 動画（左） */}
      <div className="w-full md:max-w-[480px]">
        <div className="rounded-2xl overflow-hidden border border-gray-300 w-full max-w-[320px] mx-auto md:mx-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/top-2-pc.mp4"
          />
        </div>
      </div>

      {/* テキスト（右） */}
      <div className="w-full md:pr-16 w-1/2 flex flex-col gap-20">
              {/* おにいさん */}
        <div>
          <h3 className="font-bold text-base pt-4 md:pt-2 md:text-lg mb-4">おにいさん</h3>
          <p className="text-[10px] md:text-sm leading-[2] tracking-wider text-gray-700 mb-6">
            映像が好きです。

          </p>
<div className="flex justify-end mt-4">
  <a
    href="https://www.instagram.com/i.tomomi2739/"
    className="w-16 h-16 md:w-24 md:h-24 bg-[#E0EBE4] rounded-full flex items-center justify-center text-[10px] md:text-sm text-black hover:opacity-80 transition-all shadow-md"
  >
    Instagram
  </a>
</div>

        {/* ともみ */}
        <div>
          <h3 className="font-bold text-base md:text-lg mb-4">ともみ</h3>
          <p className="text-[10px] md:text-sm leading-[2] tracking-wider text-gray-700 mb-6">
            1995年6月うまれ、埼玉育ち。<br />
            パンとチョコレートとコーヒーが好き。
            <br />
            愛媛に移住して2年が経ちました、昔から海が大好きなので自転車で海に行けるというだけで幸せです。
            <br />
            カメラを持ったのは、東京で働いていた時に仲の良い先輩がたまに使わなくなったからとNikon D200をくれたのがきっかけ。
            <br />
            花を撮るのにはまり、気づいたらここまできました、、！
          </p>
<div className="flex justify-end mt-4">
  <a
    href="https://www.instagram.com/i.tomomi2739/"
    className="w-16 h-16 md:w-24 md:h-24 bg-[#E0EBE4] rounded-full flex items-center justify-center text-[10px] md:text-sm text-black hover:opacity-80 transition-all shadow-md"
  >
    Instagram
  </a>
</div>
        </div>
        </div>
      </div>
    </section>
  );
}