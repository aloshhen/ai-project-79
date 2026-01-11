import { Coffee } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-[#141414]/50 backdrop-blur-md border-b border-[#27272A] z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-[#3B82F6]" />
          <span className="text-[#FAFAFA] font-semibold text-lg">Coffee Ecosystem</span>
        </div>
        <button className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">Sign In</button>
      </div>
    </nav>
  )
}