"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ReservationAndFAQ() {
  const faqs = [
    {
      question: "予約はいつから可能ですか",
      answer: "基本的にいつでも可能ですが、日程に余裕を持ってご相談いただけると確実です。",
    },
    {
      question: "当日が雨の場合はどうなりますか",
      answer: "天候による延期も可能です。事前にご相談させていただきます。",
    },
    {
      question: "動画のBGMのリクエストはできますか",
      answer: "もちろん可能です。事前にイメージを共有いただけるとスムーズです。",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F5F0] w-full px-6 md:px-24 py-20">
      {/* PC表示 */}
      <div className="hidden md:flex gap-24">
        {/* 左：予約の流れ */}
        <div className="w-1/2">
          <h2 className="text-2xl text-center font-bold mb-1">ご予約・撮影の流れ</h2>
          <p className="font-pen text-sm text-center tracking-[0.15em] mb-10 text-[#D2B48C] italic">From Hello to Memories</p>
<ul className="space-y-6 text-sm text-gray-700">
  <li className="flex items-start gap-4">
    <img src="/icons/request.png" alt="リクエスト" className="h-9" />
    <p><strong>1. リクエスト：</strong> フォームから撮影内容をお知らせください</p>
  </li>
  <li className="flex items-start gap-4">
    <img src="/icons/hearing.png" alt="ヒアリング" className="h-9" />
    <p><strong>2. ヒアリング：</strong> 撮影のイメージや日程についてご相談します</p>
  </li>
  <li className="flex items-start gap-4">
    <img src="/icons/payment.png" alt="お支払い" className="h-9" />
    <p><strong>3. お支払い：</strong> 撮影確定後にご案内をお送りします</p>
  </li>
  <li className="flex items-start gap-4">
    <img src="/icons/shooting.png" alt="撮影" className="h-9" />
    <p><strong>4. 撮影：</strong> お約束の場所と時間にて撮影いたします</p>
  </li>
  <li className="flex items-start gap-4">
    <img src="/icons/edit.png" alt="編集" className="h-9" />
    <p><strong>5. 編集：</strong> 約2週間程度で丁寧に編集します</p>
  </li>
  <li className="flex items-start gap-4">
    <img src="/icons/present.png" alt="納品" className="h-9" />
    <p><strong>6. 納品：</strong> 何度も見返してもらえる思い出になりますように</p>
  </li>
</ul>
        </div>

        {/* 右：よくあるご質問 */}
        <div className="w-1/2">
          <h2 className="text-2xl text-center font-bold mb-1">よくあるご質問</h2>
           <p className="font-pen text-sm text-center tracking-[0.15em] mb-10 text-[#D2B48C] italic">
  Questions You May Have.
</p>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b border-gray-300 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`ml-2 transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                    size={18}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* スマホ表示 */}
      <div className="md:hidden flex flex-col gap-6">
        <Link
          href="/flow"
          className="w-full border border-black rounded-xl py-4 text-center text-lg font-bold"
        >
          ご予約・撮影の流れ
          <p className="text-sm font-normal text-[#D2B48C] mt-1">From Hello to Memories</p>
        </Link>
        <Link
          href="/faq"
          className="w-full border border-black rounded-xl py-4 text-center text-lg font-bold"
        >
          よくあるご質問
          <p className="text-sm font-normal text-[#D2B48C] mt-1">Questions You May Have.</p>
        </Link>
      </div>
    </section>
  );
}