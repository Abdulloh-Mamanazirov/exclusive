import React, { useState } from "react";
import ProductsSection from "../home/components/ProductsSection";
import { todaysProducts } from "../home";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbG6jhyalBmC-bKKG_JfQOZNho4BodDF6jnJfBhGPr6fRdeDXXcnauLl-_7lYbdkhUHY&usqp=CAU",
  "https://atlas-content-cdn.pixelsquid.com/stock-images/playstation-5-controller-dual-sense-BYELyX3-600.jpg",
  "https://m.media-amazon.com/images/I/61WMs0+3w0S._AC_UF1000,1000_QL80_.jpg",
  "https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-accessory-top",
  "https://www.clove.co.uk/cdn/shop/products/DualSenseEdgeController-angle-back_1200x.jpg?v=1678882201",
  "https://media.direct.playstation.com/is/image/sierialto/dualsense-edge-ps5-controller-top-left-angle",
  "https://d2o7dtsnwzl7g9.cloudfront.net/tekzone/media/image/4a/ee/21/SON-PS5-DUAL-EDGE-CN-alt02.jpg",
  "https://www.evilcontrollers.com/media/catalog/product/optimized/e/2/e28ed0984c13c7d93248cf4ca4af163d62aba5edf29e1be461a50eb80feed8d8/ps5-one-handed-store-angle.png",
];

const index = (): React.ReactElement => {
  const [currentImg, setCurrentImg] = useState(images[0]);

  return (
    <div className="md:container">
      <div className="grid grid-cols-5 py-12">
        {/* images */}
        <div className="col-span-3 h-[70vh] grid grid-cols-3">
          <div className="col-span-1 flex flex-col gap-y-3 overflow-y-auto scrollbar-thin">
            {images.map((src, index) => (
              <img
                src={src}
                key={index}
                role="button"
                alt="product image"
                onClick={() => setCurrentImg(src)}
                className="w-52 h-44 border bg-white object-cover p-1"
              />
            ))}
          </div>
          <div className="col-span-2 w-full px-2 bg-white">
            <img
              src={currentImg}
              alt="product image"
              className="w-full border p-1"
            />
          </div>
        </div>
        {/* details */}
        <div className="col-span-2 md:p-10">
          <h3 className="font-semibold text-2xl">PS5 Controller white</h3>
          <p className="text-2xl mt-1 mb-3">$150.00</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            laudantium, perspiciatis fugiat doloremque aliquam distinctio.
            Tempore, quae iusto! Similique commodi quisquam rerum aliquid.
            Suscipit alias quasi voluptate quo nisi ullam.
          </p>
        </div>
      </div>
      <div className="my-12">
        <ProductsSection
          title="Related"
          heading="More items like this"
          children={todaysProducts}
          link="/"
        />
      </div>
    </div>
  );
};

export default index;
