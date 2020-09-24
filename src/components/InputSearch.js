import React, { useState } from 'react'

const InputSearch = ({setCategoria}) => {
    
    const [InputValue,setInputValue] = useState('') 

    const changeValue = (e) =>{
        setInputValue(e.target.value)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        if(InputValue.trim().length > 2){
            setCategoria(cat => [InputValue,...cat])
            setInputValue('')
        }
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={submitForm}>
            <input className="form-control mr-sm-2"  type="search" value={InputValue} onChange={changeValue} placeholder="Nombre libro" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar Libro</button>
        </form>
    )
}

export default InputSearch
