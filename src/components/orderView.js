import React, { useState } from 'react';
import { InfoClient } from './infoClient';
import { SetOrder } from './setOrder';
import { db } from '../firebase';
import '../styles/orderView.css'

export const OrderView = () => {
  const options = ["Select a table", "A1", "A2", "A3"];
  const [typeFood, setTypeFood] = useState('desayuno');
  const initialStateValues = {
    client: '',
    table: '',
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }
  const addOrder = (order) => {
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
      <div className="input-section">
          <input className="input"
          type="text"
          placeholder="Client name"
          name="client"
          onChange={handleInputChange}
          // value={client}
          />
          <select className="select" name="table"
            onChange={handleInputChange}>  

            {options.map(option => {
              return <option value={option} key={option} >{option}</option>})}
          </select>
      </div>

      <div className='info-section'>
      <InfoClient infoClient={values}/>
      </div>

      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>

      <SetOrder typeFood={typeFood} addOrder={addOrder} infoClient={values}/>
    </section>
  )
}