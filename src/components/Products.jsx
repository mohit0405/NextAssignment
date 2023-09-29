"use client";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    data = data.products.map((product) => ({
      ...product,
      img: product.images[~~(Math.random() * product.images.length)],
      rating: ~~product.rating,
    }));
    setProductsData(data);

    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    setCategories(uniqueCategories);
  };
  const filteredProducts = productsData
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === "" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>Products</h2>

        <div className=' mb-4 flex justify-between'>
          {" "}
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            className='rounded'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            {" "}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='rounded'
            >
              <option value=''>All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              className='text-sm text-slate-500 ml-2'
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc"
                ? "Sort by Price (Low to High)"
                : "Sort by Price (High to Low)"}
            </button>
          </div>
        </div>
        <div className='pb-16 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {filteredProducts.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.description}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
