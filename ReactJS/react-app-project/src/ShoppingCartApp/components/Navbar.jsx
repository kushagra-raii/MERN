import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/icons8-shopping-90.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div>
      <nav className="flex justify-between items-center h-[13vh] max-w-5xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 ">
            <img className=" " width="59px" src={Logo} alt="Logo" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
            <FaShoppingCart className=" text-2xl" />
            {
              cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
            }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
