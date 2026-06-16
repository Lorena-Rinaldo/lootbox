"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-[999] transition-all duration-300
      ${scrolled
          ? "h-16 bg-black/80 backdrop-blur-lg border-b border-purple-500/30 shadow-[0_4px_30px_rgba(139,92,246,0.15)]"
          : "h-20 bg-transparent"}
    `}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="
            p-1.5 rounded-lg
            bg-gradient-to-br from-purple-600/20 to-blue-500/20
            border border-purple-500/30
            group-hover:border-purple-500/60
            transition-all duration-300
          ">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-tight">
            LOOT BOX
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/produtos", label: "Produtos" },
            { href: "/contato", label: "Contato" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </Link>
          ))}
        </nav>

        {/* Botões Direita */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
          >
            Entrar
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 text-zinc-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[40] md:hidden"
            />

            {/* Conteúdo do Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0c] border-l border-purple-500/20 z-[45] md:hidden pt-24 px-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/produtos", label: "Produtos" },
                  { href: "/contato", label: "Contato" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-zinc-300 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <hr className="border-purple-500/10 my-2" />

                <Link
                  href="/"
                  className="flex items-center gap-3 text-zinc-300 hover:text-white"
                >
                  <User className="w-5 h-5" /> Minha Conta
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}