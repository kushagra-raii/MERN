import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";



const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }
  return (
  <div className="flex w-[100%] border-b-2 border-opacity-80 min-h-[235px]: border-b-slate-800 justify-evenly items-center">
    <div className=" w-[30%]">
      <img   className=" p-2" src={item.image} alt="" />
    </div>
    <div className=" w-[60%] flex p-6 flex-col gap-2">
      <h1 className=" font-semibold">{item.title}</h1>
      <p>{item.description.split(" ").slice(0, 14).join(" ") + "..."}</p>
      <div className=" flex justify-between">
        <p className="text-green-600 font-semibold">{`$${item.price}`}</p>
        <div>
          <FcDeleteDatabase size="25px" onClick={removeFromCart}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
