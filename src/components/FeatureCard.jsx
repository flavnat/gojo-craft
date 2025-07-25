
function FeatureCard({ description, name, price, image }) {
  return (
    <div className="space-y-2">
      {/* image */}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      </div>
      {/* description */}
      <div className="space-y-1 p-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-xs">{description}</p>
        <p className="text-xl font-semibold">{price}</p>
      </div>
    </div>
  );
}

export default FeatureCard;