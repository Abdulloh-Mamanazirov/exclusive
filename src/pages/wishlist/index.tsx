import React from "react";
import { WishlistCard } from "@/components";
import { thisMonthsProducts } from "../home";

const index = (): React.ReactElement => {
  return (
    <div className="md:container mt-10 mb-20">
      <div className="flex items-center gap-4">
        <div className="bg-one w-5 h-10 rounded-md" />
        <h4 className="font-bold text-one">Wishlist</h4>
      </div>
      <div className="my-6 flex items-center justify-between">
        <h3 className="text-4xl font-semibold">Items in your wishlist</h3>
      </div>

      <div
        className={
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-6 gap-y-3 scrollbar-none"
        }
      >
        {thisMonthsProducts.map((item, index) => (
          <WishlistCard
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
    </div>
  );
};

export default index;
