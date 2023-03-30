import React from 'react';
import Button from './component/Button/Button';
import Card from './component/Card/Card';
import Header from './component/Header/Header';

const App = () => {
  
  return (
    <>
     <Header></Header> 
     <Button>Sort By Date</Button>
     <Card></Card>
    </>
  );
};

export default App;