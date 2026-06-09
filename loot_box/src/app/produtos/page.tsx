import GameCard from "@/components/gamecard";
import ProdutosBanner from "@/components/produtos-banner";

import produtos from "../../../produtos.json"


export default function Produtos() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between bg-black dark:bg-black sm:items-start">
            <div className="container mx-auto py-8">
                <ProdutosBanner />

                <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
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
