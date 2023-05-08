const ProductCard = ({ product }) => {
  return (
    <div class=" w-10/12 h-80 bg-white grid place-items-center rounded-sm">
      <img
        src={product.image}
        alt={product.id}
        class="w-[150px] h-[150px] object-contain"
      />
      <span class="text-black">{product.title}</span>
    </div>
  );
};

export default ProductCard;
