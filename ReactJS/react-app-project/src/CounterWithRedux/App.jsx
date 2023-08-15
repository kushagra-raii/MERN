import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Counter from "./Component/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  );
};

export default App;
