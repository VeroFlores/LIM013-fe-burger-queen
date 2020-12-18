import React from 'react'
import { db } from '../firebase'
const DataClient=(props)=>{
    const dat=props.dataClient.dataClient;
    console.log(dat);
        return(
                <div>
                   <div>
                       <p>{dat.client}</p>
                       <p>{}</p>
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

            <DataClient dataClient={data}/>
        </div>
    )
  
}


export default TotalOrder
