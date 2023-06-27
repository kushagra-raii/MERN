// import logo from './logo.svg';
import './App.css';
import Item from './Component/Item'
import ItemDate from './Component/ItemDate';
import Cards from './Component/Cards';

function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"2004",
    },
    {
      itemName:"Nirma1",
      itemDate:"201",
      itemMonth:"june1",
      itemYear:"20041",
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"june2",
      itemYear:"20042",
    }
  ];
  return (
    

    <Cards>
      <div className="App">
      <div >
        <h1>Hello React</h1>
      </div>

      <Item name= {response[0].itemName} >
        <p>Abc</p>
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>

      <Item name= {response[1].itemName} />
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}/>

      <Item name= {response[2].itemName} />
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}/>
      
      
    </div>
    </Cards>
  );
}

export default App;
