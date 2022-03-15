import React from 'react';

const Input = (props) => {
    return (
        <div className='inputForm'>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} onChange={props.handleFormValue} required />
        </div>
    )
};

export default Input;
