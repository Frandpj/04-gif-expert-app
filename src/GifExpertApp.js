import React, { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['Haikyuu', 'shingeki no kyojin', 'Nanatsu no Taizai'];

    const [categories, setCategories] = useState(['Haikyuu', 'shingeki no kyojin', 'Nanatsu no Taizai']);

    const handleAdd = () => {

        // setCategories([...categories, 'No game no life']);
        // El primer argumento es el valor del estado anterior
        setCategories(cast => [...cast, 'No game no life']);

    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map((category, i) => {

                        return <li key={category}>{category}</li>;

                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;