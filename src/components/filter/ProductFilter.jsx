"use client"

import { useState } from "react";
import { TfiHandOpen } from "react-icons/tfi";
import { GiBarefoot, GiCrystalEarrings, GiEmeraldNecklace } from "react-icons/gi";
import { FaGem } from "react-icons/fa6";
import ProductCard from "../products/ProductCard";
import { products } from "@/data/products";

const categories = [
    { name:"all", icon:<FaGem /> }, 
    { name: "earrings", icon: <GiCrystalEarrings /> },
    { name: "necklaces", icon: <GiEmeraldNecklace /> },
    { name: "bracelets", icon: <TfiHandOpen /> },
    { name: "anklets", icon: <GiBarefoot /> }
];

export default function ProductFilter() {
      const [category, setCategory] = useState("all");
    
      // filter
      const filteredProducts = (products || [])
        .filter((product) => {
          if (category === "all") return true;
          return product.category === category;
        })
    
    return (
        <div className="flex gap-4 mb-6 flex-wrap">
            {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setCategory(cat.name)}
                  className={`flex border-2 items-center rounded-full capitalize transition gap-2 px-4 py-2 ${
                    category === cat.name
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
        </div>
        </div>
    )};