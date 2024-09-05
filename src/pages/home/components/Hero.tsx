import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

declare interface HoverItem {
  title: string;
  path: string;
  children?: {
    path: string;
    title: string;
  }[];
  isHoverable: boolean;
}

const HoverItem = ({ title, path, children = [], isHoverable }: HoverItem) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger className="inline-block w-fit">
          <Link to={path} className="flex items-center gap-2">
            <p>{title}</p>
            {isHoverable && children.length > 0 && (
              <ChevronRight size={20} />
            )}{" "}
          </Link>
        </HoverCardTrigger>
        {isHoverable && children.length > 0 && (
          <HoverCardContent align="end" side="right">
            <ul>
              {children.map((i) => (
                <li key={i.path}>
                  <Link to={i.path} className="hover:underline">{i.title}</Link>
                </li>
              ))}
            </ul>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
};

const Hero = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-[1fr,3fr]">
      <div className="py-5 border-r flex flex-col gap-1">
        <HoverItem
          path="/men"
          isHoverable={true}
          title="Women clothes"
          children={[
            { path: "1", title: "First item" },
            { path: "2", title: "Second item" },
          ]}
        />
        <HoverItem
          path="/electronics"
          isHoverable={true}
          title="Electr home appliances"
          children={[
            { path: "1", title: "First item" },
            { path: "2", title: "Second item" },
            { path: "3", title: "Third item" },
          ]}
        />
        <HoverItem
          path="/men"
          isHoverable={true}
          title="Women clothes"
          children={[
            { path: "1", title: "First item" },
            { path: "2", title: "Second item" },
          ]}
        />
        <HoverItem
          path="/electronics"
          isHoverable={true}
          title="Electr home appliances"
          children={[
            { path: "1", title: "First item" },
            { path: "2", title: "Second item" },
            { path: "3", title: "Third item" },
          ]}
        />
        <HoverItem path="/women" title="Men clothes" isHoverable={false} />
        <HoverItem path="/women" title="Men clothes" isHoverable={false} />
      </div>
      <div className="py-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="px-2"
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="/src/assets/hero-banner.png"
                alt="banner image"
                className="w-full h-80 object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/src/assets/shapes-dark.png"
                alt="banner image"
                className="w-full h-80 object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/src/assets/shapes-light.png"
                alt="banner image"
                className="w-full h-80 object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/src/assets/win-11.jpg"
                alt="banner image"
                className="w-full h-80 object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
