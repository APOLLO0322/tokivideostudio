// app/lp/page.tsx — サイトリニューアル提案のLP（デザイン参照: トキ映像製作所 LP.dc.html）
import Link from "next/link";
import ImageSlot from "@/components/classical/ImageSlot";
import HeroVideos from "@/components/classical/HeroVideos";
import "@/styles/classical.css";

export const metadata = {
  title: "トキ映像製作所",
  description: "日常は最高の宝物。出張撮影スタジオ トキ映像製作所。",
};

const plans = [
  {
    title: "Ordinary",
    desc: "日常の記録",
    items: ["撮影2時間（移動時間含む）", "データ納品"],
    price: "¥40,000",
  },
  {
    title: "Gift",
    desc: "贈りもの用途",
    items: [
      "撮影2時間（移動時間含む）",
      "データ納品",
      "木製フォトフレーム付（マスターウォール製・ウォールナット材）",
      "オフショット写真3枚",
    ],
    price: "¥65,000",
  },
  {
    title: "Event",
    desc: "お宮参り・七五三・入籍・プロポーズなど",
    items: ["撮影2時間（移動時間含む）", "データ納品"],
    price: "¥70,000",
  },
  {
    title: "My Year",
    desc: "年4回撮影",
    items: ["各回2時間（移動時間含む）", "データ納品", "総集編ムービー付き"],
    price: "¥135,000",
  },
];

const steps = [
  { n: "01", title: "お問い合わせ", desc: "フォームからお申込みください" },
  { n: "02", title: "ヒアリング", desc: "ご要望をお伺いし撮影のイメージや構成をご提案" },
  { n: "03", title: "ご予約", desc: "日程・場所を決めてご予約確定" },
  { n: "04", title: "撮影当日", desc: "最高の1日に！" },
  { n: "05", title: "編集", desc: "一つ一つ丁寧に編集いたします" },
  { n: "06", title: "ご納品", desc: "データにてお届けします" },
];

const galleryCount = 6;

export default function LpPage() {
  return (
    <div className="classical" style={{ overflowX: "hidden" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          padding: "var(--space-4) var(--space-6)",
          borderBottom: "1px solid var(--color-divider)",
          maxWidth: 1040,
          margin: "0 auto",
        }}
      >
        <img
          src="/logo.png"
          alt="トキ映像製作所"
          style={{ height: 36, width: "auto", flexShrink: 0 }}
        />
        <Link href="/apply" className="btn btn-primary">
          お申し込み
        </Link>
      </header>

      <section style={{ width: "100%", aspectRatio: "16 / 7", overflow: "hidden" }}>
        {/* public/hero/ の動画を順番に再生する */}
        <HeroVideos />
      </section>

      <section
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "calc(var(--space-8) * 1.5) var(--space-6)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 26,
            letterSpacing: "0.02em",
            color: "var(--color-accent-700)",
            marginBottom: "var(--space-3)",
          }}
        >
          日常は最高の宝物
        </div>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 2,
            letterSpacing: "0.01em",
            margin: 0,
            color: "var(--color-neutral-700)",
          }}
        >
          1日、1月、1年。
          <br />
          そのすべてが、特別な「いつか」になるように。
        </p>
        <div className="hr" style={{ maxWidth: 80, margin: "var(--space-5) auto 0" }} />
      </section>

      <section
        id="plan"
        className="lp-section"
        style={{
          background: "var(--color-bg)",
          maxWidth: "none",
          paddingTop: "calc(var(--space-8) * 2)",
          paddingBottom: "calc(var(--space-8) * 2)",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 var(--space-6)" }}>
          <div style={{ textAlign: "center", marginBottom: "calc(var(--space-8) * 1.25)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-accent-700)",
                fontSize: 40,
                letterSpacing: "0.15em",
                fontStyle: "italic",
              }}
            >
              PLAN
            </div>
          </div>
          <div
            className="lp-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-6)",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="card elev-sm"
                style={{
                  background: "var(--color-bg)",
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="card-title"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontSize: 26,
                    margin: "0 0 var(--space-2)",
                  }}
                >
                  {plan.title}
                </div>
                <div
                  className="card-body"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "var(--color-neutral-700)",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {plan.desc}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 var(--space-4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-2)",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "var(--color-neutral-700)",
                    flex: 1,
                  }}
                >
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        paddingLeft: "var(--space-3)",
                        borderLeft: "2px solid var(--color-accent-300)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    fontSize: 28,
                    color: "var(--color-accent-700)",
                    borderTop: "1px solid var(--color-divider)",
                    paddingTop: "var(--space-3)",
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ fontSize: 12, color: "var(--color-neutral-500)" }}>（税込）</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div style={{ textAlign: "center", marginBottom: "calc(var(--space-8) * 1.25)" }}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-accent-700)",
              fontSize: 14,
              letterSpacing: "0.15em",
              fontStyle: "italic",
            }}
          >
            FLOW
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: 34,
              margin: "var(--space-3) 0 0",
            }}
          >
            ご利用の流れ
          </h2>
        </div>
        <div
          className="lp-flow"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "var(--space-4)",
            position: "relative",
          }}
        >
          <div
            className="lp-flow-line"
            style={{
              position: "absolute",
              top: 17,
              left: "8%",
              right: "8%",
              height: 1,
              background: "var(--color-divider)",
              zIndex: 0,
            }}
          />
          {steps.map((step) => (
            <div key={step.n} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-accent-500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: 16,
                  color: "var(--color-accent-700)",
                  fontVariantNumeric: "lining-nums tabular-nums",
                }}
              >
                {step.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 18,
                  margin: "var(--space-3) 0 var(--space-2)",
                }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: 13, color: "var(--color-neutral-700)", lineHeight: 1.7 }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-section">
        <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-accent-700)",
              fontSize: 14,
              letterSpacing: "0.15em",
              fontStyle: "italic",
            }}
          >
            GALLERY
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: 34,
              margin: "var(--space-3) 0 0",
            }}
          >
            撮影実績
          </h2>
        </div>
        <div
          className="lp-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-4)",
          }}
        >
          {Array.from({ length: galleryCount }, (_, i) => (
            <div key={i} className="plate" style={{ aspectRatio: "3 / 2" }}>
              <ImageSlot
                placeholder={`実績写真${i + 1}`}
                src={`/gallery/${i + 1}.jpg`}
                alt={`撮影実績 ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="lp-section"
        style={{
          textAlign: "center",
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-divider)",
          maxWidth: "none",
          paddingTop: "calc(var(--space-8) * 2)",
          paddingBottom: "calc(var(--space-8) * 2)",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 var(--space-6)" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: 32,
              margin: "0 0 var(--space-4)",
            }}
          >
            動画で「今」をいつでも会える瞬間に
          </h2>
          <div style={{ marginBottom: "var(--space-8)" }} />
          <Link href="/apply" className="btn btn-primary">
            お申込み
          </Link>
        </div>
      </section>

      <footer
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "var(--space-8) var(--space-6)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-4)",
          borderTop: "1px solid var(--color-divider)",
          fontSize: 13,
          color: "var(--color-neutral-500)",
        }}
      >
        <div>
          トキ映像製作所
          <br />
          愛媛県松山市鴨川1-6-15
        </div>
        <div>Copyright © トキ映像製作所 All Rights Reserved.</div>
      </footer>
    </div>
  );
}
