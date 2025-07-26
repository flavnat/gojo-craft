import { Accordion, AccordionItem } from "../components/Accordion";
import { CheckboxGroup } from "../components/CheckboxGroup";
import FilterDrawer from "../components/FilterDrawer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
const products = [
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
  {
    image: "../public/./products/product-3.jpg",
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
export default function ProductsPage() {
  return (
    <>
      <NavBar />

      <div className="mt-10">
        {/* Product Grid */}
        {/* <div className="flex justify-between mt-10 items-center col-start-2 col-span-4">
          <h1 className="text-2xl font-semibold uppercase">All Crafts</h1>
        </div> */}
        <div className="grid grid-cols-5 gap-x-6 gap-y-10 mt-5 items-start">
          {/* categories */}
          <div className="">
            <h1 className="text-2xl font-semibold my-2">Filter</h1>
            <Accordion>
              <AccordionItem value={1} trigger={"Avaliablity"}>
                <CheckboxGroup
                  // selectedValues={availability}
                  // dispatch={dispatch}
                  actionType="SET_AVAILABILITY"
                  options={[
                    { label: "In Stock", value: "in_stock" },
                    { label: "Out of Stock", value: "out_stock" },
                  ]}
                />
              </AccordionItem>
              <AccordionItem value={2} trigger={"Category"}>
                <CheckboxGroup
                  // selectedValues={availability}
                  // dispatch={dispatch}
                  actionType="SET_CATEGORY"
                  options={[
                    {
                      label: "Clothing & Textiles",
                      value: "clothing_textiles",
                    },
                    {
                      label: "Jewelry & Accessories",
                      value: "jewelry_accessories",
                    },
                    { label: "Home Decor", value: "home_decor" },
                    { label: "Pottery", value: "pottery" },
                    { label: "Woodcraft ", value: "woodcraft" },
                    {
                      label: "Paintings & Artwork",
                      value: "paintings_artwork",
                    },
                  ]}
                />
              </AccordionItem>
            </Accordion>
          </div>
          {/* products */}
          <div className="grid grid-cols-4 col-span-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
