import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo');
    
    /* El input se queda con un valor asignado
    y esta función hace que se pueda cambiar ese valor */
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // Hace que el formulario funcione sin actualizar la página e imprime un mensaje
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
