import React from 'react'
import useFetchBooks from '../hooks/useFetchBooks'
import CardComponent from './CardComponent';

const ContenidoComponent = ({category})=> {


    const {data:libros, loading} = useFetchBooks(category);

    return (

        <div className="container card-libros">
            <h3 className="mt-3">{category}</h3>
            { loading && <p className="text-center">Cargando..</p> }
            <div className="row">
            {   
                libros.map(imgs => <CardComponent key={imgs.id} {...imgs}/>)
            }
            </div>
        </div>
    )
}

export default ContenidoComponent;