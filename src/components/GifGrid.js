import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { loading } = useFetchGifs();

    console.log(loading);

    /* useEffect con un segundo argumento array vacío hace que este código solo 
    se ejecute una vez, si en el array añadimos el parámetro, si por algún casual
    cambia la categoría (parámetro) volverá a disparar la función */
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [ category ])

    return (
        <>
            <h3>{ category }</h3>

            { loading  ? 'Cargando...' : 'Data cargada'}
            {/* <div className="card-grid">
                Tarea, imprimir lista con key = id y el titulo = title de la función getGifs 
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
            </div> */}
        </>
    )
}
