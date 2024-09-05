import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CategoriesSectionI, CateogryCardI } from "@/interfaces";

const CategoryCard = ({
  id,
  title,
  image,
}: CateogryCardI): React.ReactElement => {
  return (
    <Link
      to={id}
      className="min-w-44 w-44 h-36 p-3 border text-center grid place-items-center"
    >
      <div className="size-14 aspect-square">
        <img
          src={image}
          alt="category image"
          className="w-full aspect-square object-contain"
        />
      </div>
      <p className="line-clamp-1">{title}</p>
    </Link>
  );
};

const CategoriesSection = ({
  title,
  heading,
  children = [],
}: CategoriesSectionI): React.ReactElement => {
  const productsRef = useRef<HTMLDivElement>();

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-one w-5 h-10 rounded-md" />
        <h4 className="font-bold text-one">{title}</h4>
      </div>
      <div className="my-6 flex items-center justify-between">
        <h3 className="text-4xl font-semibold">{heading}</h3>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              productsRef.current.scrollBy({
                left: -400,
                behavior: "smooth",
              })
            }
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              productsRef.current.scrollBy({
                left: 400,
                behavior: "smooth",
              })
            }
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div
        ref={productsRef}
        className={
          "max-w-full w-full flex gap-x-6 gap-y-3 overflow-x-auto py-4 scrollbar-none"
        }
      >
        {children.map((item, index) => (
          <CategoryCard
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
