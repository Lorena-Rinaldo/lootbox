import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="
      w-full h-16
      bg-gradient-to-r from-[#050505] via-[#0b0615] to-[#050505]
      border-b border-purple-500/20
      backdrop-blur-md
      px-36
      flex items-center justify-between
      shadow-[0_0_25px_rgba(139,92,246,0.15)]
    ">
      
      {/* Logo */}
      <div className="flex items-center gap-3 group">
        <div className="
          p-2 rounded-xl
          bg-gradient-to-br from-purple-600/20 to-blue-500/20
          border border-purple-500/20
          shadow-[0_0_15px_rgba(168,85,247,0.3)]
          group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
          transition-all duration-300
        ">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={40}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>

        <h1 className="
          text-lg font-bold
          bg-gradient-to-r from-purple-400 to-blue-400
          bg-clip-text text-transparent
          tracking-wide
        ">
          Loot Box
        </h1>
      </div>

      {/* Navegação */}
      <nav className="flex items-center space-x-8">
        {[
          { href: "/", label: "Home" },
          { href: "/produtos", label: "Produtos" },
          { href: "/contato", label: "Contato" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              relative text-sm font-medium text-zinc-200
              transition-all duration-300
              hover:text-white
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-purple-500 after:to-blue-500
              after:transition-all after:duration-300
              hover:after:w-full
              hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]
            "
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}