import Carrossel from "@/components/carrossel";
import GameCard from "@/components/gamecard";

import produtos from "../../produtos.json"


export default function Home() {

  const produtosDestacados = produtos.filter(
    (produto) => {
      produto.destaque === true
    }
  )

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between bg-black dark:bg-black sm:items-start">
      <div className="container mx-auto py-8">
        <Carrossel />
        <div className="flex flex-row flex-wrap justify-between gap-6 w-full">
          {produtos.map((produto) => (
            <GameCard
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
