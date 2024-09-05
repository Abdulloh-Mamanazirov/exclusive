import React from "react";
import type { FeaturedCardI, FeaturedSectionI } from "@/interfaces";
import { Link } from "react-router-dom";

const FeaturedCard = ({
  id,
  title,
  image,
  description,
  cardIndex,
}: FeaturedCardI): React.ReactElement => {
  function cardIndexClasses(ind: number) {
    switch (ind) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-span-2 row-span-1";
      default:
        return "";
    }
  }

  return (
    <div
      className={`bg-black relative border w-full h-full flex flex-col justify-end bg-cover bg-center ${cardIndexClasses(
        cardIndex
      )}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* <div className="w-full h-full absolute inset-0">
        <img
          src={image}
          alt="category image"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30" />
      <div className="z-10 p-3 text-white">
        <p className="line-clamp-1 text-lg font-medium mb-1">{title}</p>
        <p className="line-clamp-2 text-sm mb-3">{description}</p>
        <Link to={id} className="underline">
          Shop now
        </Link>
      </div>
    </div>
  );
};

const FeaturedGrid = ({
  title,
  heading,
  children = [],
}: FeaturedSectionI): React.ReactElement => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-one w-5 h-10 rounded-md" />
        <h4 className="font-bold text-one">{title}</h4>
      </div>
      <div className="my-6 flex items-center justify-between">
        <h3 className="text-4xl font-semibold">{heading}</h3>
      </div>
      <div className="md:h-[70vh] grid grid-cols-4 grid-rows-2 gap-2">
        {children.map((item, index) => (
          <FeaturedCard
            key={index}
            id={item.id}
            cardIndex={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;
