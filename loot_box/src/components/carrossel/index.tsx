"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GroundedCarrossel from "@/components/grounded/index";
import PeakCarrossel from "@/components/peak/index";

const games = [
  GroundedCarrossel,
  PeakCarrossel
];

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    < Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {games.map((GameComponent, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <GameComponent />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel >
  );
}