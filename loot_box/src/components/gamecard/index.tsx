import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  link?: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
  link = "/" 
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Link href={link} className="group block h-full">
      <Card className="relative h-full w-full overflow-hidden rounded-lg border border-purple-500/15 bg-[#09090d] p-0 text-white shadow-[0_0_18px_rgba(139,92,246,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/35 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.16)]">
        {destaque && (
          <Badge className="absolute right-3 top-3 z-10 rounded-md border border-purple-400/30 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-purple-100 backdrop-blur-md">
            Destaque
          </Badge>
        )}

        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          <Image
            src={imageSrc || "/images/placeholder.png"}
            alt={`Capa do jogo ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 384px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent opacity-70" />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex-1 min-w-0">
            <h2 className="truncate text-base font-semibold text-zinc-50">
              {title}
            </h2>
            <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-zinc-400">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Digital
            </span>
            <span className="rounded-md bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-3 py-1.5 text-sm font-semibold text-blue-100 ring-1 ring-purple-400/20">
              {formattedPrice}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
