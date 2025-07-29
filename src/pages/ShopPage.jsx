import { useState } from "react";
import { products } from "../../mock/mockProducts";
import { Accordion, AccordionItem } from "../components/Accordion";
import { CheckboxGroup } from "../components/CheckboxGroup";
import FilterDrawer from "../components/FilterDrawer";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  // const cart = useSelector((state) => state.cart);
  const [availability, setAvailability] = useState([]);
  const [categories, setCategories] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesAvailability =
      availability.length === 0 ||
      (availability.includes("in_stock") && product.inStock) ||
      (availability.includes("out_stock") && !product.inStock);

    const matchesCategory =
      categories.length === 0 || categories.includes(product.category);

    return matchesAvailability && matchesCategory;
  });

  return (
    <>
      <div className="my-10 px-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 mt-5 items-start">
          {/* filters */}
          <div>
            <h1 className="text-2xl font-medium uppercase my-1">Filter</h1>

            <div className="md:hidden block">
              <FilterDrawer>
                <Accordion>
                  <AccordionItem value={1} trigger={"Availability"}>
                    <CheckboxGroup
                      options={[
                        { label: "In Stock", value: "in_stock" },
                        { label: "Out of Stock", value: "out_stock" },
                      ]}
                      onChange={setAvailability}
                    />
                  </AccordionItem>
                  <AccordionItem value={2} trigger={"Category"}>
                    <CheckboxGroup
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
                        { label: "Woodcraft", value: "woodcraft" },
                        {
                          label: "Paintings & Artwork",
                          value: "paintings_artwork",
                        },
                      ]}
                      onChange={setCategories}
                    />
                  </AccordionItem>
                </Accordion>
              </FilterDrawer>
            </div>

            <div className="md:block hidden">
              <Accordion>
                <AccordionItem value={1} trigger={"Availability"}>
                  <CheckboxGroup
                    options={[
                      { label: "In Stock", value: "in_stock" },
                      { label: "Out of Stock", value: "out_stock" },
                    ]}
                    onChange={setAvailability}
                  />
                </AccordionItem>
                <AccordionItem value={2} trigger={"Category"}>
                  <CheckboxGroup
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
                      { label: "Woodcraft", value: "woodcraft" },
                      {
                        label: "Paintings & Artwork",
                        value: "paintings_artwork",
                      },
                    ]}
                    onChange={setCategories}
                  />
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* product grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 col-span-4 gap-x-6 gap-y-10">
            <div className="col-span-full">
              <h1 className="text-2xl font-medium uppercase">Craft Items</h1>
              <p className="text-sm text-zinc-600">
                Explore a curated collection of authentic Ethiopian handmade
                crafts.
              </p>
            </div>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  product={product}
                />
              ))
            ) : (
              <p className="text-center col-span-4">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
