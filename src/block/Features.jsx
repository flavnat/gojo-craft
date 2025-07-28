import { Link } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageSlider from "../components/ImageSlider";

export default function Features() {
  return (
    <div className="my-20">
      <article className="md:flex space-y-4 justify-between items-center m-auto md:max-w-[88%] px-6">
        <div>
          <h2 className="md:text-2xl text-lg uppercase font-semibold">
            traditional textiles
          </h2>
          <p className="md:text-sm text-xs lowercase text-zinc-500">
            Beautiful handwoven fabrics showcasing Ethiopian cultural patterns
          </p>
        </div>

        <div className="md:flex hidden">
          <button className="md:text-xl text-sm border md:px-2 md:py-1 px-1 py-1 cursor-pointer">
            <Link to={"/shop"}>view all</Link>
          </button>
        </div>
      </article>

      {/* carousel */}

      <ImageSlider />
    </div>
  );
}
