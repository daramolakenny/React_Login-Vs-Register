import React from 'react';
import '../index.css';
import Input from './Input';

function Form(props) {
  return (
    <div className='container'>
        <form action="">
            <Input 
                type="text"
                placeholder="UserName"
            />
            <Input 
                type="password"
                placeholder="Password"
            />
            {!props.isRegistered && <Input 
                type="text"
                placeholder="Confirm Password" 
            />}
            
            <div className='content'>
                <button type='submit'> {props.isRegistered === true ? "Login" : "Register"} </button>
            </div>   
        </form>
    </div>
  )
}

export default Form;