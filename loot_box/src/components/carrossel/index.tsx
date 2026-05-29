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
  return (
    < Carousel >
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