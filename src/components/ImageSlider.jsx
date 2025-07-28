import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    slug: "genuine-leather-shoulder-bag",
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: 960.99,
    category: "clothing_textiles",
    inStock: true,
  },
  {
    id: 2,
    slug: "ethiopian-coffee-beans",
    image: "../public/./products/product-1.avif",
    name: "Ethiopian Coffee Beans",
    description: "Premium organic coffee beans from the highlands of Ethiopia.",
    price: 24.99,
    category: "food_beverages",
    inStock: true,
  },
  {
    id: 3,
    slug: "handwoven-traditional-scarf",
    image: "../public/./products/product-2.avif",
    name: "Handwoven Traditional Scarf",
    description:
      "Beautifully crafted scarf with traditional Ethiopian patterns.",
    price: 89.99,
    category: "clothing_textiles",
    inStock: false,
  },
  {
    id: 4,
    slug: "silver-tribal-necklace",
    image: "../public/./products/product-3.jpg",
    name: "Silver Tribal Necklace",
    description:
      "Authentic Ethiopian silver jewelry with cultural significance.",
    price: 156.5,
    category: "jewelry_accessories",
    inStock: true,
  },
  {
    id: 5,
    slug: "handcrafted-wooden-bowl",
    image: "../public/./products/product-3.jpg",
    name: "Handcrafted Wooden Bowl",
    description: "Traditional wooden bowl carved by Ethiopian artisans.",
    price: 45.0,
    category: "woodcraft",
    inStock: true,
  },
]
export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[90%] m-auto">
      <div className="my-10">
        <Slider {...settings} className="">
          {products.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              product={product}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
