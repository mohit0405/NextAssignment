"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const page = ({ params }) => {
  const [productsData, setProductsData] = useState({});

  const renderRatingStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }

    return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
  };

  const fetchProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    let product = await res.json();
    product = {
      ...product,
      img: product.images[~~(Math.random() * product.images.length)],
      rating: ~~product.rating,
    };
    setProductsData(product);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!(Object.keys(productsData).length > 0)) return <h1>Loading...</h1>;

  return (
    <div className="flex items-center flex-col gap-6 justify-center py-12">
  
      <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div
          style={{ height: "32vh", width: "18rem" }}
          className="overflow-hidden"
        >
          <Image
            className="w-full h-auto"
            src={productsData["img"]}
            width={200}
            height={300}
            alt={productsData["title"]}
          />
        </div>

        <div className="space-y-2 py-2">
          <h2 className="text-accent font-medium uppercase">
            {productsData["title"]}
          </h2>
          <p className="text-gray-500 max-w-[150px]">
            {productsData["description"]}
          </p>
          <div>{renderRatingStars(productsData["rating"])}</div>

          <div className="font-bold flex gap-4">
            ${productsData["price"]}
            <del className="text-gray-500 font-normal">
              $
              {parseInt(productsData["price"]) +
                Math.floor(Math.random() * 60 + 20)}
              .00
            </del>
          </div>
        </div>
      </div>
     <a href="/"><button className="bg-cyan-400 text-white px-2 py-1 rounded">Add to Cart</button></a>  
    </div>
  );
};

export default page;
