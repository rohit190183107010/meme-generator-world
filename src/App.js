import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  // const [isImportant, setIsImportant] = React.useState("Yes")
  // function handleClick() {
  //   setIsImportant("No")
  // }
  return (
    <div className="App">
      {/* <h1 className='state--title'>Is state important to know</h1>
      <div className='state--value' onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div> */}
      <Header />
      <Meme />
    </div>
  );
}

export default App;
