import { useState } from 'react';
import './App.css';

const App = () => {
  const [bookPrices, setBookPrices] = useState([2.5, 4.5, 3.5, 6.0, 8.0])
  
  return (
      <div>
        {bookPrices.map((price) => {
    return <h1>The price is {price}</h1>
  })}
      </div> 
  );
};

export default App;