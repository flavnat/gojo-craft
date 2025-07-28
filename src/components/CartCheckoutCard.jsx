import { Link } from "react-router";

function CartCheckoutCard({ subTotal }) {
  return (
    <div className="capitalize px-1">
      <div className="flex justify-between space-x-2">
        {/* detail */}
        <div className="">
          <h1 className="text-lg">Estimate total</h1>
          <p className="text-xs">
            Taxes and shipping are calculated at checkout.
          </p>
        </div>
        {/* price */}
        <div>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(subTotal)}{" "}
        </div>
      </div>

      <div className="text-center flex mt-2 space-y-2 flex-col">
        <button className="bg-black py-2 font-medium text-white cursor-pointer">
          checkout
        </button>
        <button className="py-2 border border-black">
          <Link to={"/cart"}>view cart</Link>
        </button>
      </div>
    </div>
  );
}

export default CartCheckoutCard;
