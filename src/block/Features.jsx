import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageSlider from "../components/ImageSlider";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router";

export default function Features() {
  return (
    <div className="mt-10">
      <article className="flex justify-between items-center m-auto">
        <div>
          <h2 className="text-2xl uppercase font-semibold">
            traditional textiles
          </h2>
          <p className="text-sm lowercase text-zinc-500">
            Beautiful handwoven fabrics showcasing Ethiopian cultural patterns
          </p>
        </div>

        <div>
          <Link to={"/product"}>
            <button className="text-xl border px-2 py-1 cursor-pointer">view all</button>
          </Link>
        </div>
      </article>

      {/* carousel */}

      <ImageSlider />
    </div>
  );
}
