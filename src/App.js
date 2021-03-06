import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h3>Pronay Kumar Saha :{count}</h3>
      <br/>
      <Header count={count} setCount={setCount}></Header>
      <br/>
      <Home count={count}></Home>
    </div>
  );
}

export default App;
