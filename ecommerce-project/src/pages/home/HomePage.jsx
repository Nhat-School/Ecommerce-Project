import axios from "axios";
import { useEffect,useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({cart,loadCart}) {
  const [products, setProducts] = useState([]);
useEffect( () => {
  const getHomeData =  async () => {
    const response = await axios("/api/products");
    setProducts(response.data);
  };
  getHomeData();
}, []);
  

  return (
    <>
      <title>Ecommerce</title>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
