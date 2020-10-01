import React from 'react';
import './App.css';
import Header from './components/header/component';
import Main from './components/main/component';


function App() {
  return (
    <div className='site'>
      <div className='container'>
      <Header />
      <Main />
      </div>
    </div>
  );
}

export default App;
