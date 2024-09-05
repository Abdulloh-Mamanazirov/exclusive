import React, { useRef } from "react";
import { Card } from "@/components";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductsSectionI } from "@/interfaces";

const ProductsSection = ({
  title,
  heading,
  link,
  children = [],
  view = "horizontal",
}: ProductsSectionI): React.ReactElement => {
  const productsRef = useRef<HTMLDivElement>();

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-one w-5 h-10 rounded-md" />
        <h4 className="font-bold text-one">{title}</h4>
      </div>
      <div className="my-6 flex items-center justify-between">
        <h3 className="text-4xl font-semibold">{heading}</h3>
        {view === "horizontal" && (
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
        )}
      </div>
      <div
        ref={productsRef}
        className={
          view === "horizontal"
            ? "max-w-full w-full flex gap-x-6 gap-y-3 overflow-x-auto py-4 scrollbar-none"
            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-6 gap-y-3 scrollbar-none"
        }
      >
        {children.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            discount={item.discount}
            price={item.price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="mt-7 text-center">
        <Link to={link}>
          <Button size="lg">View all</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsSection;
