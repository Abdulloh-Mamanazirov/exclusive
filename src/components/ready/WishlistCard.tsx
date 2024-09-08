import React from "react";
import { Button } from "../ui/button";
import { Eye, ShoppingCart, Trash } from "lucide-react";
import type { ProductCardI } from "@/interfaces";

const Card = ({
  id,
  title,
  image,
  discount,
  price,
  old_price,
}: ProductCardI): React.ReactElement => {
  return (
    <div className="group min-w-fit">
      <div className="relative overflow-hidden">
        {discount && (
          <p className="absolute top-3 left-3 bg-one text-white text-sm px-3 rounded-md">
            -{discount}%
          </p>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button variant="outline" size="icon" className="rounded-full size-8">
            <Trash className="size-4" />
            <span className="sr-only">Remove from Wishlist</span>
          </Button>
          <Button
            data-id={id}
            variant="outline"
            size="icon"
            className="rounded-full size-8"
          >
            <Eye className="size-4" />
            <span className="sr-only">See product</span>
          </Button>
        </div>
        <div className="size-64">
          <img
            src={image}
            alt="product image"
            className="w-full aspect-square object-cover shadow rounded-md"
          />
        </div>
        <button className="absolute bottom-0 text-center text-white bg-black w-full rounded-b-md py-2 translate-y-full group-hover:translate-y-0 transition-all">
          <span className="flex items-center justify-center gap-2">
            <ShoppingCart className="size-4" />
            <p>Add to cart</p>
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2 max-w-64">
        <p className="font-medium max-w-full line-clamp-2">{title}</p>
        <div className="flex items-center gap-7">
          <p className="font-medium text-one">${price}</p>
          {old_price && (
            <p className="font-medium opacity-30 line-through">${old_price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
