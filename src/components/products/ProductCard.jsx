import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";



export default function ProductCard({ product }) {

  const { addToCart } = useCart();

    return (
        <div className="px-15 w-full h-full md:p-0 md:h-fit">
            <article className="flex flex-col items-center border-2 border-[#f4d4ad] rounded-lg h-fit p-5 md:p-10">
                <div>
                  <Image 
                  className="relative p-5 w-40 md:w-80 md:p-0"
                  src={product.image} 
                  alt={product.name} 
                  width={200}
                  height={200}
                  />
                </div>

                <div>
                  <p
                  className="text-lg flex justify-center p-2 md:text-2xl"
                  >{product.name}</p>    
                </div>

                <div className="w-full flex justify-between align-center p-4 bg-[#f4d4ad] rounded-2xl text-sm md:justify-around md:p-6 md:text-lg">
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
                  onClick={() => addToCart(product)}
                  >
                    <FaCartShopping />
                  </button>
                </div>
            </article>

        </div>
    )
}