import React, { useEffect, useState } from 'react';


import { OrderList } from './orderList.js';
import { Product } from './product';
import { db } from '../firebase';

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const options = ["Select a table", "A1", "A2", "A3"];
  
  const initialStateValues = {
    client: '',
    table: '',
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  const selectProduct = (item) => {
    setOrder([...order, item]);
  }
  const totalOrder=order.reduce((acc,menu)=>acc+menu.price,0);
  
  const onDeleteOrderList=(index)=>{
    let temporaryArray = [...order];
    temporaryArray.splice(index,1);
    setOrder(temporaryArray);
  }
  useEffect(()=>{
    db.collection('items').where('menu','==', props.typeFood).get()
    .then((queryResults)=>{
      const arrayMenu =[]
      queryResults.forEach((doc)=>{arrayMenu.push(doc.data());
      })
      setMenu(arrayMenu)
    })
  },[props.typeFood]);

  const cleanOrder = () => {
    setOrder([]);
    setValues(initialStateValues);
  };

  return (
    <>
      <ul className='display-list-product'>
        {menu.map((item, index) => <Product key = {'m'+ index} itemProduct = {item}  selectProduct={selectProduct} />)}
      </ul>
      <ul className="display-list-order">
        <div>
        <div className="input-section">
          <input className="input"
          type="text"
          placeholder="Client name"
          name="client"
          onChange={handleInputChange}
          value={values.client}
          />
          <select className="select" 
            name="table"
            onChange={handleInputChange}
            value={values.table}>  

            {options.map(option => {
              return <option value={option} key={option} >{option}</option>})}
          </select>
      </div>

          {order.map((item, index) => <OrderList key = {'o'+ index} itemProduct = {item} onDelete={()=>onDeleteOrderList(index)}/>)}
        </div>
        <div className="price-total">Total S/. {totalOrder}</div>
        <button 
          className ='button' 
          onClick={() => {
            props.addOrder(order,values);
            cleanOrder();
          }}
        >Tomar pedido</button>
      </ul>

    </>
  )
};