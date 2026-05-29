import Image from "next/image";

export default function Overcooked() {
    return (
        <a href="/" className="m-0">
            <div className="relative flex flex-col my-6 bg-slate-800 shadow-sm border-slate-200 w-96">
                <div className="relative h-44 m-0.5 overflow-hidden text-white">
                    <Image
                        src={'/images/overcooked.png'}
                        alt={'Imagem de fundo'}
                        width={600}
                        height={600}
                    />
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div>
                        <h6 className="mb-2 text-white text-xl font-semibold">Overcooked</h6>
                    </div>
                    <div>
                        <button className="bg-green-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-nonw active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" type="button">
                            R$214,90
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}