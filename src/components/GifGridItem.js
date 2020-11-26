import React from 'react'

// export const GifGridItem = (img) => {
export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
            {/* Si no se hiciera desestructuración se tendría que acceder al titlo así */}
            {/* {img.img.title} */}
        </div>
    )
}
