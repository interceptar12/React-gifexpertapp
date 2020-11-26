export const getGifs = async (category) => {
    // El encodeURI() es para remplazar espacio por % o caracter que no se avalido, para que se realice nuestra petición correctamente
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6Kf5E2dO10CJ6wD92oZeU2nuatBeKxiB`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    // El signo de pregunta es para denotar que si trae las imagenes, que las almacene, si no, no
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}