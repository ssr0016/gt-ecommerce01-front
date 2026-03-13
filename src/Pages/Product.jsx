import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContenxt";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcum from "../Components/Breadcrum/Breadcrum";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id == Number(productId));

  return (
    <div>
      <Breadcum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
