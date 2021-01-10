import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import moment from 'moment';
export const Kitchen = (props) => {
const [showOrder, setShowOrder] = useState([]);
  useEffect(()=>{
    db.collection('ordenes').onSnapshot((doc) => {
      const arrayMenu =[]
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      setShowOrder(arrayMenu)
    })
  }, 
  []);
  const updateData = (idDoc) => {
    db.collection('ordenes').doc(idDoc).update({
      endTime:new Date().toLocaleTimeString(),
      status:'Done',
    }).then(()=>{console.log('updated')})
  }
  return (
    <div>
      {showOrder.map((order,index)=>
        <ul key={order.id}>
          <p>Pedido Nro.{index+1}</p>
          <p>Mesa: {order.table}</p>
          <p>Status: {order.status}</p>
          <p>Hora de Pedido:{order.time}</p>
          {order.endTime===null?'':<p>Demora:{(moment(order.endTime,"hh:mm:ss").diff(moment(order.time,"hh:mm:ss"),'minutes'))} minutes</p>}

          <p>Detalle de Pedido</p>
          {order.items.map((element,index)=>
          <li key={'o'+index}>{element}</li>)}
          <button onClick={()=>{updateData(order.id)}}>{order.status}</button>
        </ul>
      )}
    </div>
  )
};

