import React from "react";
import { Button } from "../ui/button";
import { Eye, Heart } from "lucide-react";

declare interface ProductCard {
  id: string;
  path: string;
  title: string;
  image: string;
  discount?: number;
  price: number;
  old_price?: number;
}

const Card = ({
  id,
  path,
  title,
  image,
  discount,
  price,
  old_price,
}: ProductCard): React.ReactElement => {
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        {discount && (
          <p className="absolute top-3 left-3 bg-one text-white text-sm px-3 rounded-md">
            -{discount}%
          </p>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button variant="outline" size="icon" className="rounded-full size-8">
            <Heart className="size-4" />
            <span className="sr-only">Add to Wishlist</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full size-8">
            <Eye className="size-4" />
            <span className="sr-only">See product</span>
          </Button>
        </div>
        <img
          src={image}
          alt="product image"
          className="w-64 h-64 object-cover shadow rounded-md"
        />
        <button className="absolute bottom-0 text-center text-white bg-black w-full rounded-b-md py-2 translate-y-full group-hover:translate-y-0 transition-all">
          Add to wishlist
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-7">
          <p className="font-medium text-one">${price}</p>
          {old_price && (
            <p className="font-medium opacity-30 line-through">${price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
