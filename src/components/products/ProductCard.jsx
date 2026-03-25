import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function ProductCard({ product }) {

    return (
        <div className="">
            <article>
                <div>
                  <Image 
                  className="relative p-5"
                  src={product.image} 
                  alt={product.name} 
                  width={200}
                  height={200}
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

        </div>
    )
}