import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";



import { Kitchen } from './kitchen'
import { OrderView } from './orderView';
import {Menu} from './navbar';

export const Restaurant = () => {

  return (
    <main>
      <header>
        <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt=""/>
        <div className="directions-links">
          <a href="/waiter">Waiter</a>
          <a href="/kitchen">Kitchen</a>
        </div>
      </header>
      <Switch>
        <Route path="/restaurant">
          <Menu />
        </Route>
        <Route path="/waiter">
          <OrderView />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
      </Switch>
</main>
  )
};

// {props.listOrder.map((order, index) => <div key={index}>
// <h1>Pedido {index + 1 }: </h1>
// <ul>
//   {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
// </ul>