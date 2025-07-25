function ProductCard({ image, description, name, price }) {
  return (
    <div className="space-y-2">
      {/* image */}
      <div className="overflow-hidden bg-zinc-100 p-5">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
      {/* description */}
      <div className="space-y-1 p-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-xs">{description}</p>

        <div className="flex justify-between mt-4">
          <p className="text-xl font-semibold">{price}</p>
          <button className="border px-2 py-1 text-sm rounded-2xl">add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
