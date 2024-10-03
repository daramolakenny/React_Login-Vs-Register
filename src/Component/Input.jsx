import React from 'react';
import '../index.css';

function Input(props) {
  return (
    <div className='content'>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input;