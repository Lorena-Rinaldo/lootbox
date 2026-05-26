export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
        relative w-full
        bg-gradient-to-r from-[#050505] via-[#0b0615] to-[#050505]
        border-t border-purple-500/20
        px-36 py-8
        overflow-hidden
      "
        >
            {/* Glow decorativo */}
            <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[400px] h-[2px]
        bg-gradient-to-r from-transparent via-purple-500 to-transparent
        opacity-70 blur-sm
      " />

            {/* Efeito de luz */}
            <div className="
        absolute -top-20 right-0
        w-64 h-64
        bg-blue-500/10
        blur-3xl rounded-full
      " />

            <div className="
        relative z-10
        flex justify-between items-center
        text-xs
      ">

                <p className="text-zinc-400">
                    © {currentYear}{" "}
                    <span className="
            bg-gradient-to-r from-purple-400 to-blue-400
            bg-clip-text text-transparent font-semibold
          ">
                        Loot Box
                    </span>
                    . Todos os direitos reservados.
                </p>

                <p className="
          text-zinc-500
          hover:text-purple-400
          transition-colors duration-300
        ">
                    Feito com carinho para você.
                </p>
            </div>
        </footer>
    );
}