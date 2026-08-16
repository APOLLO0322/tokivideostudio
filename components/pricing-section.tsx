import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const plans = [
    {
      name: "Short Films",
      price: "¥8,000",
      description: "基本的な撮影・編集パッケージ",
      features: ["撮影時間: 1時間", "編集込み", "データ納品"],
    },
    {
      name: "Ordinary",
      price: "¥15,000",
      description: "日常撮影プラン",
      features: ["撮影時間: 2時間", "編集込み", "データ納品", "プリント5枚"],
    },
    {
      name: "My Year",
      price: "¥30,000",
      description: "年間記録プラン",
      features: ["月1回撮影", "年間アルバム制作", "動画編集込み", "データ納品"],
    },
  ]

  return (
    <section className="w-full px-4 py-16 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-12 text-center">撮影料金</h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-2xl font-light text-gray-800 mb-2">{plan.price}</div>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                詳細を見る
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
