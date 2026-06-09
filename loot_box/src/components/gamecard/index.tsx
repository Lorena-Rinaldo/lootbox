import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

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
  id,
  destaque,
  link = "/" 
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <a href={link} className="block hover:scale-[1.02] transition-transform duration-200">
      <Card className="relative flex flex-col bg-slate-800 border-none shadow-sm w-96 overflow-hidden rounded-none">
        
        {destaque && (
          <Badge variant="secondary" className="absolute top-2 right-2 z-10 shadow-md">
            Destaque
          </Badge>
        )}

        <div className="relative h-44 m-0.5 overflow-hidden">
          <Image
            src={imageSrc || "/images/placeholder.png"}
            alt={`Capa do jogo ${title}`}
            fill
            className="object-cover"
            sizes="384px"
          />
        </div>

        <div className="flex flex-row justify-between p-4 items-center gap-2">
          <div className="flex-1 min-w-0">
            <h6 className="text-white text-xl font-semibold truncate">
              {title}
            </h6>
          </div>

          <div>
            <Button 
              className="bg-green-700 hover:bg-green-600 text-white font-bold rounded-none h-auto py-2 px-4 border-none"
            >
              {formattedPrice}
            </Button>
          </div>
        </div>
      </Card>
    </a>
  )
}