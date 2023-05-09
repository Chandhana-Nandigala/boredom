import React from "react";
import StarRatings from "react-star-ratings";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = React.useState(false);
  return (
    <div class=" w-10/12 p-2 bg-white grid place-items-center rounded-md shadow-lg">
      <img
        src={product.image}
        alt={product.id}
        class="w-[150px] h-[150px] object-contain"
      />
      <button
        class=" p-1 border rounded-full z-40"
        onClick={() => setLiked(!liked)}
      >
        <FaHeart color={liked ? "red" : "gray"} size={20} />
      </button>
      <span class="text-black font-bold text-sm text-center">
        {product.title}
      </span>
      <div>
        <p class="text-black font-semibold">Price</p>
        <p class="text-black font-bold text-xs">${product.price}</p>
      </div>
      <div class="items-center flex justify-center">
        <StarRatings
          starRatedColor="green"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="2px"
          starEmptyColor="black"
          name="rating"
          rating={product.rating.rate}
        />
        <p class="text-black font-semibold text-xs">{product.rating.count}</p>
      </div>
    </div>
  );
};

export default ProductCard;
