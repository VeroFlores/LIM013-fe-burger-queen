import React from 'react'
import { db } from '../firebase'
const DataClient=(props)=>{
    const getObject=props.infoClient.infoClient;
    console.log(getObject);
        return(
                <div>
                   <div>
                       <p>{getObject.client}</p>
                       <p>{getObject.table}</p>
                       <button>Editar</button>
                   </div>
               </div>
        )
                
}
const TotalOrder =(props)=> {
    const data =props;
    console.log(props);
    return (
        <div className="container">

            <DataClient infoClient={data}/>
        </div>
    )
  
}


export default TotalOrder
