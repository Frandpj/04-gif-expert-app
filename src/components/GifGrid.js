import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    /*
    Al desestructurar se le puede cambiar el nombre a la variable
    con ":", ejemplo: data:images, ahora data se llama images
    */
    const { data:images, loading } = useFetchGifs(category);

    console.log(loading);

    /*
    useEffect con un segundo argumento array vacío hace que este código solo 
    se ejecute una vez, si en el array añadimos el parámetro, si por algún casual
    cambia la categoría (parámetro) volverá a disparar la función 
    */
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [ category ])

    return (
        <>
            <h3>{ category }</h3>
            {/* Forma más corta de un if else, ya que solo se pone el if si sale bien */}
            {loading && <p>Loading</p>}

            <div className="card-grid">
                {/* Tarea, imprimir lista con key = id y el titulo = title de la función getGifs  */}
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            // Se pasa el objeto tal cual para que en el otro lado se pueda desestructurar
                            // Lo que llega al otro lado ya no es variable.img si no img nada más
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
