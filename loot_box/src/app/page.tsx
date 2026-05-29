import Carrossel from "@/components/carrossel";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between bg-black dark:bg-black sm:items-start">
      <div className="container mx-auto py-8">
        <Carrossel />
      </div>
    </main>
  );
}
