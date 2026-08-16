import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="w-full px-4 py-16 md:py-24 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-4">日常の瞬間を、特別な思い出に。撮影のご相談はお気軽にどうぞ。</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">TOKI BLOG</h3>
              <p className="text-sm opacity-90">撮影のコツや日々の出来事を綴っています</p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-gray-800">お仕事実績</h3>
              <p className="text-sm text-gray-600">これまでの撮影事例をご紹介</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            メールでのご連絡は平日営業時間内にお返事いたします。お急ぎの方はお電話でお問い合わせください。
          </p>

          <div className="mb-12">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Contact image"
              width={400}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-8">公式SNS</h2>

          <div className="mb-12">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="SNS preview"
              width={300}
              height={200}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
