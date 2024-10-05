import { Product } from "@/utils/types";
import React from "react";
import ProductCard from "./ProductCard";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul className="
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-24 
      [&>li:nth-child(2n)]:border-r-0 
      [&>li:nth-child(2n)]:md:border-r-[1px] 
      [&>li:nth-child(3n)]:md:border-r-0 
      [&>li:nth-child(3n)]:lg:border-r-[1px] 
      [&>li:nth-child(4n)]:lg:border-r-0
      
      [&>li:nth-child(3n)>a>figcaption]:md:border-r-0 
      [&>li:nth-child(3n)>a>figcaption]:lg:border-r-[1px] 
      [&>li:nth-child(3n)>a>figcaption]:md:right-0 
      [&>li:nth-child(3n)>a>figcaption]:lg:-right-[1px]
      [&>li:nth-child(4n)>a>figcaption]:lg:border-r-0
      [&>li:nth-child(4n)>a>figcaption]:lg:-right-0 
    ">
      {products.map((product) => {
        return (
          <ProductCard product={product} key={product.id} />
        );
      })}
    </ul>
  );
}

export default ProductsGrid;
