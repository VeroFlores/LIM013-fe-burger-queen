import React from 'react';

export const InfoClient = (props) => {
  console.log(props.infoClient)
  return(
    <>
    <p>Cliente: {props.infoClient.client}</p>
    <p>Nro. mesa: {props.infoClient.table}</p>
    </>
  )
}