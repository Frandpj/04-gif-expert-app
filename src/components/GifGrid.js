import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

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

    }

    return (
        <>
            
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => {setCount(count + 1)} }></button>

        </>
    )
}
