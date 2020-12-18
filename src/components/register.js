import React,{useState,useEffect} from 'react'


const SaveRegister=(props)=>{
    const initialSetValues={
        client:'',
        table:''
    };
    const [values,setValues]=useState(initialSetValues);
    const handleInputChange= e=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value});
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        props.addData(values);
    }
    const onChangeSelect=(e)=>{
        
        const table=e.target.value;
        setValues({...values,'table':table})
    }
    return (
        <form onClick={onFormSubmit}>
            <input type="text" 
            placeholder="Nombre de cliente" 
            name="client" 
            onChange={handleInputChange}/>
            <select name="tables" onChange={onChangeSelect}>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B1</option>
            </select>
            <button type="submit">
                Registrar
            </button>
        </form>
    )
}
export default SaveRegister