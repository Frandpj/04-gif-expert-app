import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    // useEffect con un segundo argumento array vacío hace que este código solo se ejecute una vez
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Haikyuu&limit=10&api_key=XWTVRwidIy51MOLo4wzocbZJJpTCmF0e';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {/* Tarea, imprimir lista con key = id y el titulo = title de la función getGifs */}
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
