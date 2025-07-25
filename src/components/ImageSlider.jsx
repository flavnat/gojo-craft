import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import FeatureCard from "./FeatureCard";

const data = [
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-1.avif",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-2.avif",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
  {
    image: "../public/./products/product-3.jpg",
    name: "Genuine Leather Shoulder Bag",
    description: "Hand-stitched in Addis Ababa using locally sourced leather.",
    price: "$960.99",
  },
];
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
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <FeatureCard
              name={d.name}
              description={d.description}
              price={d.price}
              image={d.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
