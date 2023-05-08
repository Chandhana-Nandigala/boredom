import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/products";
import ProductCard from "../productCard";

const Products = () => {
  const [prodArray, setProdArray] = React.useState([]);
  let products = useSelector(getAllProducts);
  React.useEffect(() => {
    setProdArray(products);
  }, [products]);

  console.log(typeof prodArray);
  return (
    <div class="h-auto grid grid-cols-5 ml-3 w-screen" id="products">
      {prodArray.map((item, index) => (
        <div class="mt-16">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
