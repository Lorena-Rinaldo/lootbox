import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export default function ContatoForm() {
  return (
    <section className="w-full max-w-3xl rounded-lg border border-purple-500/20 bg-[#09090d] p-6 shadow-[0_0_24px_rgba(139,92,246,0.1)] sm:p-8">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
          Contato
        </span>
        <h1 className="mt-3 text-3xl font-bold text-white">
          Fale com a Loot Box
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Envie sua duvida, sugestao ou pedido. Retornaremos assim que possivel.
        </p>
      </div>

      <form className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Nome
          <div className="relative">
            <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="h-11 w-full rounded-md border border-white/10 bg-black/35 pl-10 pr-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </label>

        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          E-mail
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              className="h-11 w-full rounded-md border border-white/10 bg-black/35 pl-10 pr-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </label>

        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Mensagem
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 size-4 text-zinc-500" />
            <textarea
              name="mensagem"
              placeholder="Como podemos ajudar?"
              rows={5}
              className="w-full resize-none rounded-md border border-white/10 bg-black/35 px-10 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </label>

        <Button
          type="submit"
          className="h-11 w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.22)] transition-all hover:from-purple-500 hover:to-blue-500 sm:w-fit sm:px-6"
        >
          <Send className="size-4" />
          Enviar mensagem
        </Button>
      </form>
    </section>
  );
}
