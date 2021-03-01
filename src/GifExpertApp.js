import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Haikyuu']);

    // const handleAdd = () => {

    //     // setCategories([...categories, 'No game no life']);
    //     // El primer argumento es el valor del estado anterior
    //     setCategories(cast => [...cast, 'No game no life']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid 
                            key= { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;