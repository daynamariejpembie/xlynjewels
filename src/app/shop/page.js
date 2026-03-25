import Header from "@/components/layout/Header";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import ProductFilter from "@/components/filter/ProductFilter";
import { products } from "@/data/products";

export default function Shop() {
  return (
    <div>
      <Header />
      <NavBar 
      />
      <ProductFilter products={products} />
    </div>
);
}
