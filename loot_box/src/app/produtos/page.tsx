"use client";

import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Search, Sparkles } from "lucide-react";
import GameCard from "@/components/gamecard";
import ProdutosBanner from "@/components/produtos-banner";
import produtos from "../../../produtos.json";

interface ProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
  categoria: string;
}

const produtosLista = produtos as ProdutoProps[];

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante");
  const [somenteDestaques, setSomenteDestaques] = useState(false);
  const [precoMaximo, setPrecoMaximo] = useState("");

  const listaCategorias = useMemo(() => {
    const categorias = produtosLista.map((produto) => produto.categoria);
    return ["Todos", ...Array.from(new Set(categorias))];
  }, []);

  useEffect(() => {
    document.title = searchTerm
      ? `Busca por "${searchTerm}" | Loot Box`
      : "Produtos | Loot Box";
  }, [searchTerm]);

  const limparFiltros = () => {
    setSearchTerm("");
    setCategoriaSelecionada("Todos");
    setOrdenacaoPreco("relevante");
    setSomenteDestaques(false);
    setPrecoMaximo("");
  };

  const produtosFiltrados = produtosLista.filter((produto) => {
    const termoBusca = searchTerm.trim().toLowerCase();
    const correspondeTexto =
      produto.title.toLowerCase().includes(termoBusca) ||
      produto.description.toLowerCase().includes(termoBusca);

    const correspondeCategoria =
      categoriaSelecionada === "Todos" ||
      produto.categoria === categoriaSelecionada;

    const correspondeDestaque = !somenteDestaques || produto.destaque;

    const valorMaximo = Number(precoMaximo);
    const correspondePreco =
      precoMaximo === "" || produto.price <= valorMaximo;

    return (
      correspondeTexto &&
      correspondeCategoria &&
      correspondeDestaque &&
      correspondePreco
    );
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacaoPreco === "menor-preco") {
      return a.price - b.price;
    }

    if (ordenacaoPreco === "maior-preco") {
      return b.price - a.price;
    }

    return 0;
  });

  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") {
      return produtosLista.length;
    }

    return produtosLista.filter((produto) => produto.categoria === categoria)
      .length;
  };

  const filtrosAtivos =
    searchTerm !== "" ||
    categoriaSelecionada !== "Todos" ||
    ordenacaoPreco !== "relevante" ||
    somenteDestaques ||
    precoMaximo !== "";

  return (
    <main className="flex min-h-screen w-full flex-col bg-black px-4 py-8 pt-24 sm:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <ProdutosBanner />

        <section className="mb-8 rounded-lg border border-purple-500/20 bg-[#09090d] p-5 shadow-[0_0_24px_rgba(139,92,246,0.1)] sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-end">
            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Pesquisar
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Buscar por nome ou descrição..."
                  className="h-11 w-full rounded-md border border-white/10 bg-black/35 pl-10 pr-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </label>

            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Preço máximo
              <input
                type="number"
                min="0"
                step="0.01"
                value={precoMaximo}
                onChange={(event) => setPrecoMaximo(event.target.value)}
                placeholder="Ex: 150"
                className="h-11 w-full rounded-md border border-white/10 bg-black/35 px-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 lg:w-36"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              Ordenar por
              <select
                value={ordenacaoPreco}
                onChange={(event) => setOrdenacaoPreco(event.target.value)}
                className="h-11 rounded-md border border-white/10 bg-black/35 px-3 text-sm text-white outline-none transition-colors focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="relevante">Mais relevantes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            {listaCategorias.map((categoria) => {
              const isActive = categoriaSelecionada === categoria;
              const totalItens = obterTotalCategoria(categoria);

              return (
                <button
                  key={categoria}
                  type="button"
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-purple-600 text-white shadow-[0_0_16px_rgba(147,51,234,0.35)]"
                      : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{categoria}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-black/40 text-zinc-500"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              );
            })}

            <label className="flex h-9 cursor-pointer items-center gap-2 rounded-full bg-white/5 px-4 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
              <input
                type="checkbox"
                checked={somenteDestaques}
                onChange={(event) => setSomenteDestaques(event.target.checked)}
                className="size-4 accent-purple-500"
              />
              <Sparkles className="size-3.5" />
              Destaques
            </label>

            {filtrosAtivos && (
              <button
                type="button"
                onClick={limparFiltros}
                className="flex h-9 items-center gap-2 rounded-full border border-white/10 px-4 text-xs font-semibold text-zinc-400 transition-colors hover:border-purple-400/40 hover:text-white"
              >
                <RotateCcw className="size-3.5" />
                Limpar filtros
              </button>
            )}
          </div>
        </section>

        <div className="mb-5 flex items-center justify-between text-sm text-zinc-400">
          <span>
            {produtosOrdenados.length === 1
              ? "1 jogo encontrado"
              : `${produtosOrdenados.length} jogos encontrados`}
          </span>
        </div>

        {produtosOrdenados.length > 0 ? (
          <section className="grid w-full grid-cols-[repeat(auto-fill,minmax(240px,280px))] justify-center gap-6">
            {produtosOrdenados.map((produto) => (
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
          </section>
        ) : (
          <section className="rounded-lg border border-purple-500/20 bg-[#09090d] px-6 py-12 text-center">
            <h2 className="text-xl font-bold text-white">
              Nenhum jogo foi encontrado
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-400">
              Tente ajustar a busca, trocar a categoria ou limpar os filtros
              para ver todos os jogos disponíveis.
            </p>
            <button
              type="button"
              onClick={limparFiltros}
              className="mt-6 rounded-md bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
            >
              Ver todos os jogos
            </button>
          </section>
        )}
      </div>
    </main>
  );
}
