import logo from './logo.svg';
import './App.css';
import Form1 from './components/Form1';
import C1 from './4.performanceComponents/C1';
import MyReducer from './4.useReducerComponents/MyReducer';
import EshopProducts from './4.eshopComponents/EshopProducts';


function App() {

const data=[
{name:"iphone1",price:"2100"},
{name:"iphone2",price:"2200"},
{name:"iphone3",price:"2300"},
{name:"iphone4",price:"2400"},
{name:"iphone5",price:"2500"}];

  return (

   // *****session4 start******
   // <div><C1></C1></div>
    // <div>
    //  <MyReducer></MyReducer> 
    // </div>
    <div>
      <EshopProducts></EshopProducts>
      </div>
  
    //*****session4 end******

    //*****session2 start******
    // <div className='container'>
    //  <Form1></Form1>
    //   {
    //     data.map(item =>{ return <Products key={item.price} price={item.price} name={item.name}/>})
    //   }
    // </div>
    //*****session2 end******



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


//*****session3 start******

// import React, { useState } from 'react';
// import Login2 from './3.components/Login2';
// import MainHeader from './3.components/Header';
// import WelcomePage from './3.components/WelcomePage';
// import './App.css'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const loginHandler = (email, password) => {
//     if(email==='ali' && password==='123')
//     setIsLoggedIn(true);
//     else
//     alert('نام کاربری یا رمز عبور اشتباه است')
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };
    
//   return (
//     <div>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login2 onLogin={loginHandler} />}
//         {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
//       </main>
//     </div>
//   );
// }

// export default App
//*****session3 end******