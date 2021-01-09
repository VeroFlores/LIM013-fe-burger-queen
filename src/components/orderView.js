import React, { useState } from 'react';
import { InfoClient } from './infoClient';
import { SetOrder } from './setOrder';
import { db } from '../firebase';
import '../styles/orderView.css'

export const OrderView = () => {
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

      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>

      <SetOrder typeFood={typeFood} addOrder={addOrder}/>
    </section>
  )
}