import React from 'react';

export const SetInfo = (props) => {
  const options = ["Select a table", "A1", "A2", "A3"];
  const handleChange=(e)=>{
    props.handleInputChange(e.target);
  }
  return(
    <div className="input-section">
      <input className="input"
      type="text"
      placeholder="Client name"
      name="client"
      onChange={handleChange}
      // value={values.client}
      />
      <select className="select" 
        name="table"
        onChange={handleChange}
        // value={values.table}
        >
        {options.map(option => {
          return <option value={option} key={option} >{option}</option>})}
      </select>
    </div>
  )
}