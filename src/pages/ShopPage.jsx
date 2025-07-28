import { useState } from "react";
import { Accordion, AccordionItem } from "../components/Accordion";
import { CheckboxGroup } from "../components/CheckboxGroup";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

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
  {
    id: 6,
    slug: "ceramic-coffee-pot",
    image: "../public/./products/product-3.jpg",
    name: "Ceramic Coffee Pot",
    description:
      "Traditional Ethiopian coffee pot (jebena) made from local clay.",
    price: 32.99,
    category: "pottery",
    inStock: true,
  },
  {
    id: 7,
    slug: "ethiopian-art-painting",
    image: "../public/./products/product-3.jpg",
    name: "Ethiopian Art Painting",
    description: "Beautiful landscape painting by local Ethiopian artist.",
    price: 299.99,
    category: "paintings_artwork",
    inStock: true,
  },
  {
    id: 8,
    slug: "handmade-cushion-cover",
    image: "../public/./products/product-3.jpg",
    name: "Handmade Cushion Cover",
    description: "Colorful cushion cover with traditional Ethiopian designs.",
    price: 39.99,
    category: "home_decor",
    inStock: false,
  },
];


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
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-x-6 gap-y-10 mt-5 items-start">
          {/* filters */}
          <div>
            <h1 className="text-2xl font-semibold my-2">Filter</h1>
            <Accordion defaultOpenAll={true}>
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

          {/* product grid */}
          <div className="grid grid-cols-4 col-span-4 gap-x-6 gap-y-10">
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
