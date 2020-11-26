import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  // No se deben de poner datos crudos ya que si se necesitan modificar, no hay manera de que React sepa que cambió el valor
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'prueba']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          // Creación de componentes dinamicamente
          
          // Las () es para indicar que estás regresando el objeto completo
          categories.map(category => (
            // El key, sirve para que react en el background sepa que elemento actualizar. Por eso debe ser único
            // <li key={category}>{category}</li>
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>

    </>
  )
}


export default GifExpertApp;
