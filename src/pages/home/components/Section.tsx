import React from "react";
import { Card } from "@/components";

const Section = (): React.ReactElement => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="bg-one w-5 h-10 rounded-md" />
        <h4 className="font-bold text-one">Today's</h4>
      </div>
      <div className="mt-6">
        <h3 className="text-4xl font-semibold">Flash Sales</h3>
      </div>
      <div className="flex items-center gap-10 mt-8">
        <Card
          id="1"
          path="1-pro"
          title="White PS 5 controller"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbG6jhyalBmC-bKKG_JfQOZNho4BodDF6jnJfBhGPr6fRdeDXXcnauLl-_7lYbdkhUHY&usqp=CAU"
          discount={50}
          price={150}
          old_price={300}
        />
        <Card
          id="2"
          path="2-pro"
          title="Black PS 5 controller"
          image="https://gameone.ph/media/catalog/product/cache/d378a0f20f83637cdb1392af8dc032a2/d/u/dualsense-controller-midnight-black-1.jpg"
          price={160}
        />
      </div>
    </div>
  );
};

export default Section;
