import React, { useState } from 'react';
import { SetInfo } from './infoClient';
import { SetOrder } from './setOrder';
import { db } from '../firebase';
import '../styles/orderView.css'

export const OrderView = () => {
  const initialStateValues = {
    client: '',
    table: '',
  };
  const [values, setValues] = useState(initialStateValues);
  const handleInput=(data)=>{
    console.log(data);
    const {name, value} = data;
    setValues({...values, [name]: value});
  }
  const [typeFood, setTypeFood] = useState('desayuno');
  const addOrder = (order,values) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });

    db.collection('ordenes').doc().set({
      client:values.client,
      table:values.table,
      time:new Date().toLocaleTimeString(),
      endTime:null,
      items:itemsOrder,
      status:'Pending',
    });
  };
  return(
    <section className="order-view-section">
      <SetInfo handleInputChange={handleInput}/>
      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>

      <SetOrder typeFood={typeFood} addOrder={addOrder}/>
    </section>
  )
}