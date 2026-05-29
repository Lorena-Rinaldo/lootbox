import Image from "next/image";

export default function PeakCarrossel() {
    return (
        <div className="relative w-full max-w-7xl mx-auto bg-gray-900 overflow-hidden my-8 cursor-pointer">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 p-6 sm:p-8 bg-gray-800 lg:bg-gray-900 flex flex-col justify-between">
                    <div>
                        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">PEAK</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 mb-6">
                            <div className="relative w-full h-24">
                                <Image
                                    src={'/images/peak1.png'}
                                    alt={'Peak Print 1'}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-24">
                                <Image
                                    src={'/images/peak2.png'}
                                    alt={'Peak Print 2'}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-24">
                                <Image
                                    src={'/images/peak3.png'}
                                    alt={'Peak Print 3'}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-24">
                                <Image
                                    src={'/images/peak4.png'}
                                    alt={'Peak Print 4'}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm mb-2">
                            <b>Recomendado por jogar jogos com os marcadores:</b>
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">Terror</span>
                            <span className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">Multijogador</span>
                            <span className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">Cooperativo</span>
                        </div>
                    </div>

                    <div className="text-right mt-auto">
                        <p className="text-white text-xl font-medium">R$ 23,99</p>
                    </div>
                </div>
                <div className="relative w-full lg:w-3/4 aspect-video flex items-center justify-center bg-black">
                    <Image
                        src={'/images/peak.jpg'}
                        alt={'Peak: The Mesa Update'}
                        fill
                        sizes="(max-width: 1024px) 100vw, 75vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}