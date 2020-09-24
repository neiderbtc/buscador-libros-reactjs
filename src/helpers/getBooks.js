const getBooks  = async(category) => {
    const url = `https://www.etnassoft.com/api/v1/get/?keyword=${category}&num_items=4`;
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    const libros = data.map(lib => {
        return {
            id: lib.ID,
            title: lib.title,
            pages: lib.pages,
            thumbnail: lib.cover,
            download: lib.url_download,
            language: lib.language,
            publisher_date: lib.publisher_date
        }
    })

    return libros

}

export default getBooks