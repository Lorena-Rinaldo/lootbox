import Carrossel from "@/components/carrossel";
import GameCard from "@/components/gamecard";


export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between bg-black dark:bg-black sm:items-start">
      <div className="container mx-auto py-8">
        <Carrossel />
        <div className="flex flex-row flex-wrap justify-between gap-6 w-full">
          <GameCard
            id="1"
            title="Overcooked"
            description=""
            price={214.90}
            imageSrc="/produtos/overcooked.png"
            destaque={false}
          />
          <GameCard
            id="2"
            title="The Last of Us Part II"
            description=""
            price={199.90}
            imageSrc="/produtos/theLastOfUs.jpg"
            destaque={false}
          />
          <GameCard
            id="3"
            title="Hollow Knight: Silksong"
            description=""
            price={59.99}
            imageSrc="/produtos/silksong_hero.jpeg"
            destaque={true}
          />
        </div>
      </div>
    </main>
  );
}
