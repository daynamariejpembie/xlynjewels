"use client"

import { useState } from "react";

const [sort, setSort] = useState("default");

const sortProducts = products.sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
})


export default function Pricefilter() {
    return(
        <div>
          <button onClick={() => setSort("low")}> Price: Low to High</button>
          <button onClick={() => setSort("high")}> Price: High to Low</button>
        </div>
    );
}