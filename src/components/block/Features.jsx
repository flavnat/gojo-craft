import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageSlider from "../ImageSlider";
import FeatureCard from "../FeatureCard";

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
          <button className="text-xl border px-2 py-1">view all</button>
        </div>
      </article>

      {/* carousel */}

      <ImageSlider />
    </div>
  );
}
