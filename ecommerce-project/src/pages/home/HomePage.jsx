import axios from "axios";
import { useEffect,useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);
useEffect(() => {
axios("/api/products")
  .then((response) => {
   setProducts(response.data);
  });

}, []);
  

  return (
    <>
      <title>Ecommerce</title>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
