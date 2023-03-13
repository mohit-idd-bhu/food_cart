import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Card from './components/UI/Card';
import './app.css';
import Items from './components/Items';

function App() {
  const item=[
      {name : "Banana Salad", val: 2.1,key : 0},
      {name : "Apple Pie", val : 2.5,key : 1},
      {name : "Fish Curry", val : 3.0,key : 2},
      {name : "Mutton Grill Sandwich", val : 1.75,key : 3},
      {name : "Cheese Pizza", val : 2.15,key : 4}
  ];

  const [number,numberChangeHandler]=useState(new Array(item.length).fill(0));

  const incrementHandler=(id)=>{
      const new_nums=[...number];
      new_nums[id]+=1;
      numberChangeHandler(new_nums);
  }

  const decrementHandler=(id)=>{
      const new_nums=[...number];
      if(new_nums[id]===0) return;
      new_nums[id]-=1;
      numberChangeHandler(new_nums);
  }

  return (
    <>
      <Navbar item={item} number={number}></Navbar>
      <Card className='intro'>
        <p>Welcome to our online food ordering site! We offer a wide variety of delicious dishes for you to choose from. Our menu features everything from appetizers to entrees and desserts, all made with the freshest ingredients.</p>
        <p>To get started, simply browse our menu and select the items you would like to order. You can add them to your cart and customize them to your liking. We also offer a range of beverages and sides to complement your meal.Our food is prepared fresh to order, so please allow us some time to prepare your meal. You can choose to have your order delivered to your doorstep or pick it up from our restaurant. We offer both options for your convenience.</p>
        <p>We take pride in the quality of our food and the service we provide. If you have any special requests or dietary restrictions, please let us know and we will do our best to accommodate you.Thank you for choosing our food ordering site. We hope you enjoy your meal!</p>
      </Card>
      <Items
        item={item}
        number={number}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      ></Items>
    </>
  );
}

export default App;
