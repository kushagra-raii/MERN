// import logo from './logo.svg';
import './App.css';
import Cards from './Component/Cards';
import Product from './Component/Product';
import NewProduct from './Component/NewProduct';

function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"2004",
    },
    {
      itemName:"Surf Excel",
      itemDate:"15",
      itemMonth:"march",
      itemYear:"2001",
    },
    {
      itemName:"Tide",
      itemDate:"02",
      itemMonth:"April",
      itemYear:"2011",
    }
  ];

  function updateProduct(newProduct){
      console.log("Inside App.js");
      console.log(newProduct);
  }

  return (
    
    
    <Cards>
    <NewProduct updateProduct={updateProduct} />
      <div className="App">
      <Product specs={response[0]}></Product>
      <Product specs={response[1]} />
      <Product specs={response[2]} />
      <Product specs={response[2]} />
      
    </div>
    </Cards>
  );
}

export default App;
