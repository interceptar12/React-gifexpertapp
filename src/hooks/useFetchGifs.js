import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

// Custom Hook (La diferencia es que los custom Hooks no interactuan con el DOM como los functional components de los componentes, sólo trabajan con lógica)
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                // setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
                // }, 3000);
            });
    }, [category]);

    // // El useEffect para evitar que una instrucción se vuelva a renderizar, 
    // // Si no se mandan dependencias, le indicas a React que sólo quieres que se ejecute la primera vez que se renderice el componente
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    //     // Cómo se tiene una función que el primer argumento es mandado como primer argumento a la función dentro de esta, se puede remplazar lo de abajo por lo de arriba
    //     // .then(imgs => {
    //     //     setImages(imgs);
    //     // });
    // }, [category]);
    // Si la categoria EN EL COMPONENTE YA CREADO cambia, entonces, se ejecutaria denuevo el useEffect

    return state;
}