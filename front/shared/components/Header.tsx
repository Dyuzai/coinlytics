import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center px-10 py-6">
        <div>
            <h1 className="text-2xl font-semibold text-zinc-100">Visão Geral do Mercado</h1>
            <p className="text-sm text-zinc-400">Dados atualizados em tempo real via CoinGecko.</p>
        </div>
        <div>
            <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
                <Input placeholder="Buscar criptomoedas..." className="text-zinc-100 pl-8 border-zinc-600 focus:border-indigo-600!"/>
            </div>
        </div>
    </header>
  )
}