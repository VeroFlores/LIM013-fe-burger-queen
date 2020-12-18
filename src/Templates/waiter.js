import React,{useState,useEffect} from 'react';
import SaveRegister from '../components/register'
import TotalOrder from '../components/register-view'

const WaiterView = () => {
    const initialSetData={
        client:'',
        table:''
    };
    const [data,setData]=useState(initialSetData);

    // const {data,setData}=useState({
    //     client:'',
    //     table:'',
    // }
    // );

    const addData=(dataObject)=>{
         setData({...data,client:dataObject.client,table:dataObject.table})
    }
    console.log(data);

    return (
        <div>
            <SaveRegister addData={addData} />
            <TotalOrder dataClient={data}/>
        </div>
    )
}
export default WaiterView