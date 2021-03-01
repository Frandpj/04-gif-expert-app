import { useState } from "react"

export const useFetchGifs = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // A los 3 segundos se cargan los datos y deja de cargar (loading: false)
    setTimeout(() => {
        setState({
            data: [1, 2, 3, 4, 5, 6, 7],
            loading: false
        })
    }, 3000);

    return state; // { data: [] , loading: true};

}
