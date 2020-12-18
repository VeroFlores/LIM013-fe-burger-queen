import React from 'react'
import { db } from '../firebase'
 const ViewData=()=>{
    //  const {data,setData}=useState([]);
    //  console.log(data);
    //  console.log(setData);
    //  const addData=(dataObject)=>{
    //      console.log(dataObject);
    //  }
    //  const getData=async ()=>{
    //      db.collection('customer').onSnapshot((querySnapshot)=>{
              
    //           const docs = querySnapshot.map((doc)=>{
    //             return ({...doc.data(),id:doc.id})
    //           })
    //         setData(docs);
    //         console.log(docs);
    //      })
    //  }
    // console.log(getData);
    // useEffect(()=>{
    //     getData();
    // },[]);
    const DataClient=(props)=>{
            return(
                <div>
                   <div>
                       <p>{props.name}</p>
                       <p>{props.table}</p>
                       <button>Editar</button>
                   </div>
               </div>
       
            )
        
    }
    return (
        <div>
            <DataClient/>
        </div>
    )

 }
export default ViewData
