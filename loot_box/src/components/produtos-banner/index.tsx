import Image from "next/image";

const bannerImages = [
  {
    src: "/produtos/eldenRing.jfif",
    alt: "Capa do jogo Elden Ring",
  },
  {
    src: "/produtos/redDeadRedemption2.jfif",
    alt: "Capa do jogo Red Dead Redemption 2",
  },
  {
    src: "/produtos/silksong_hero.jpeg",
    alt: "Capa do jogo Hollow Knight: Silksong",
  },
];

export default function ProdutosBanner() {
  return (
    <section className="relative mb-8 overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-r from-[#07070a] via-[#100a1d] to-[#07101c] px-6 py-8 shadow-[0_0_24px_rgba(139,92,246,0.12)] sm:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
            Catálogo
          </span>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Jogos para todos os estilos
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
            Explore os títulos disponíveis na Loot Box e encontre sua próxima
            aventura.
          </p>
        </div>

        <div className="hidden h-40 w-[340px] items-center justify-end md:flex">
          {bannerImages.map((image, index) => (
            <div
              key={image.src}
              className="relative -ml-8 h-36 w-28 overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] first:ml-0"
              style={{ transform: `translateY(${index === 1 ? "-10px" : "10px"})` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
