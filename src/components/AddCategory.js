import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // Si se deja vacío es undefined y marca un warning, se puede poner un string vacío
    
    /* El input se queda con un valor asignado
    y esta función hace que se pueda cambiar ese valor */
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // Hace que el formulario funcione sin actualizar la página e imprime un mensaje
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(cast => [...cast, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Hace que la función setCategories sea obligatoria para que el componente funcione
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
