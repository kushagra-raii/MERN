import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
const App = () => {
  return (
  <Provider store={store}>
    <div>
      <div className=" bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
   </Provider>
  );
};

export default App;
