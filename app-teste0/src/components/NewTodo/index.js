import { useState } from "react";
import React from 'react';
import "./styles.css";
import PropTypes from  'prop-types';

const NewTodo = ({onNewTodo}) => {

const ENTER_KEY = 13;
const SCAPE_KEY = 27;


const [value, setValue] = useState('');  

const onChange = (event)=>{
    setValue(event.target.value)
}

const erase = () =>{
    setValue('');
}
const submit = () =>{
    if(onNewTodo){
        onNewTodo(value);
        erase();
    }
}


const onKeyDown = (event) => {
    if(event.which  === ENTER_KEY  && value !== ""){
        submit();
        
    }else if(event.which === SCAPE_KEY){
        erase();
    }
}
  return (
    <input className='new-todo' 
    placeholder='O que precisa ser feito?' 
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    />
  )
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo;