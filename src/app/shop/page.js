import Header from "@/components/layout/Header";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import ProductFilter from "@/components/filter/ProductFilter";
import { products } from "@/data/products";

export default function Shop() {
  return (
    <div className="bg-[#C2A27A] w-full min-h-screen">
      <Header />
      <NavBar 
      />
      <ProductFilter products={products} />
    </div>
);
}
