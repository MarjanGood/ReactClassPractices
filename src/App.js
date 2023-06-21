import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Form1 from './components/Form1';


function App() {

const data=[
{name:"iphone1",price:"2100"},
{name:"iphone2",price:"2200"},
{name:"iphone3",price:"2300"},
{name:"iphone4",price:"2400"},
{name:"iphone5",price:"2500"}];

  return (

    <div className='container'>
     <Form1></Form1>
      {
        data.map(item =>{ return <Products key={item.price} price={item.price} name={item.name}/>})
      }
    </div>


    // <div className="App">

    //   <div className='container'></div>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
