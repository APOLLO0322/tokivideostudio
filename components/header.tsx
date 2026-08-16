import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-sm font-medium text-gray-800">トキ映像制作所</div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            サービス
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            料金
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            お問い合わせ
          </a>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden md:block w-8 h-8 bg-pink-200 rounded-full"></div>
      </div>
    </header>
  )
}
