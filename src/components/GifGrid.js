import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // Usando nuestro custom Hook
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading ? <p className="animate__animated animate__flash">Loading</p> : null}

            <div className="card-grid">
                {
                    // En este caso con el ...img, se estará mandando cada propiedad de forma independiente para poder hacer desestructuración de una forma sencilla
                    // El {...img} es como si nosotros mandaramos img={img.id, img.title, img.url} pero de una forma más corta
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        // img={img}
                        />
                    ))
                }
            </div>
        </>
    )
}
