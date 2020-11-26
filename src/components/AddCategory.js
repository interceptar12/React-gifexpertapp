import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // No se debe de dejar useState() ya que el estado será undefined, y la variable que cambia eso será

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // Como no se tiene acceso a las categorias como tal, se llama al call back
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        // En el caso que tengamos un elemento que agrupe todo lo demás, no es necesario poner un fragment
        <form onSubmit={handleSubmit}>
            {/* Cuando hay dos o más atributos, es mejor separarlo por lineas para poder verlo con mayor facilidad */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}