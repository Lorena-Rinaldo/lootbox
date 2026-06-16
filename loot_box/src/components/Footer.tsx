export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
        relative w-full
        bg-gradient-to-r from-[#050505] via-[#0b0615] to-[#050505]
        border-t border-purple-500/20
        py-8 overflow-hidden
      "
        >
            {/* Glow decorativo (Linha superior) */}
            <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[300px] md:w-[600px] h-[1px]
        bg-gradient-to-r from-transparent via-purple-500 to-transparent
        opacity-50 blur-[1px]
      " />

            {/* Efeito de luz de fundo (Lado direito) */}
            <div className="
        absolute -bottom-10 right-0
        w-48 h-48
        bg-blue-600/5
        blur-[100px] rounded-full
      " />

            {/* Container Principal (Baseado na estrutura do professor) */}
            <div className="
        max-w-7xl mx-auto 
        px-6 lg:px-36 
        relative z-10
        flex flex-col md:flex-row 
        justify-between items-center 
        gap-4 text-xs text-center md:text-left
      ">

                {/* Lado Esquerdo: Copyright */}
                <p className="text-zinc-400">
                    &copy; {currentYear}{" "}
                    <span className="
            bg-gradient-to-r from-purple-400 to-blue-400
            bg-clip-text text-transparent font-bold
          ">
                        Loot Box
                    </span>
                    . Todos os direitos reservados.
                </p>

                {/* Lado Direito: Assinatura */}
                <p className="
          text-zinc-500
          hover:text-purple-400
          transition-colors duration-300
          font-medium
        ">
                    Feito com carinho para você.
                </p>
            </div>
        </footer>
    );
}