import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full px-4 py-16 md:px-8 bg-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-8">トキ映像制作所</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-gray-800 mb-4">お問い合わせ</h3>
            <p className="text-sm text-gray-600 mb-2">メール: info@toki-films.com</p>
            <p className="text-sm text-gray-600 mb-4">電話: 090-1234-5678</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">営業時間</h3>
            <p className="text-sm text-gray-600 mb-2">平日: 9:00 - 18:00</p>
            <p className="text-sm text-gray-600 mb-4">土日祝: 要相談</p>
          </div>
        </div>

        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2">お問い合わせ</Button>

        <div className="mt-12 pt-8 border-t border-pink-200">
          <p className="text-xs text-gray-500">© 2024 トキ映像制作所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
