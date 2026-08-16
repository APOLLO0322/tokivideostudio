// app/home/page.tsx
import PinnedSplit from "@/components/pinned/PinnedSplit";
import PinnedSplitReversed from "@/components/pinned/PinnedSplitReversed";
import ProfileSection from "@/components/profile-section";
import ReservationAndFAQ from "@/components/services-section";


export default function HomePage() {
  return (
    <main className="bg-[#F8F5F0] text-gray-800">
        <section className="max-w-3xl mx-auto bg-[#F8F5F0] px-6 py-16 text-gray-800 text-left">
  <h2 className="text-2xl font-bold md:text-3xl tracking-wider mb-2">
    今日を、いつか振り返りたい時に。
  </h2>
<p className="font-pen text-sm tracking-[0.15em] text-[#D2B48C] italic">
  Because everyday is worth remembering.
</p>
  <div className="max-w-3xl mx-auto text-left text-[10px] md:text-sm pt-6 leading-[2] md:leading-[3] space-y-4">
    <p>日常は最高の宝物。</p>
    <p>そうわかっていても、毎日あっという間に時間は過ぎてしまいます。</p>
    <p>でも、「日常」になっている会話も目差しも笑い声も仕事も、変わっていくものだから</p>
    <p>今この瞬間を大切にしたいと思うあなたの日々に寄り添うためにトキ映像製作所は生まれました。</p>
    <p className="mt-6 font-medium">
      動画で「今」をいつでも会える瞬間に。
    </p>
  </div>
</section>

<PinnedSplit />
<PinnedSplitReversed />

<ProfileSection />
<ReservationAndFAQ />

      {/* 以下セクション順に追加予定 */}
    </main>
  );
}