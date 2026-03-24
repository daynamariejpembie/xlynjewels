import { products } from "@/data/products";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function ProductCard() {
    return (
        <div className="grid grid-cols-3">
          {products.map(product => (
            <article key={product.id}>
                <div>
                  <Image 
                  className="p-5"
                  src={product.image} 
                  alt={product.name} 
                  width={400}
                  height={400}
                  />
                </div>

                <div>
                  <p
                  className="text-2xl flex justify-center"
                  >{product.name}</p>    
                </div>

                <div className="flex justify-between px-10">
                  <button 
                  className="hover:cursor-pointer"
                  >
                    <FaRegHeart />
                  </button> 

                  <div>
                    {formatCurrency(product.price)}
                  </div>   

                  <button
                  className="hover:cursor-pointer"
                  >
                    <FaCartShopping />
                  </button>
                </div>
            </article>
          ))}
        </div>
    )
}