import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, cur) => acc + cur.price, 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  return (
    <div className="flex w-full  justify-evenly">
      {cart.length > 0 ? (
        <div className="flex h-[80vh] max-w-5xl m-3 justify-center overflow-hidden">
          <div className=" overflow-y-scroll pr-6 flex flex-col gap-2 w-1/2 ">
            {cart.map((post, index) => (
              <CartItem key={post.id} itemIndex={index} item={post} />
            ))}
          </div>
          <div className="flex flex-col overflow-y-hidden justify-between  px-4 min-w-fit">
            <div>
              <div className=" text-green-700 font-semibold" >Your Cart</div>
              <div className=" text-green-700 font-bold text-5xl uppercase">Summary</div>
              <p className="mt-3">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>Total Amount : <span className=" font-semibold">${totalAmount.toFixed(2)}</span></p>
              <button className=" bg-green-700 w-full py-2 text-slate-100 rounded font-semibold">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <NavLink to="/">Shop now</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
