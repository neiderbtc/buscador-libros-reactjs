import React from 'react'

const CardComponent = ({title,thumbnail,download,pages,language,publisher_date}) => {
    return (
        <div className="col-lg-3 ">
            <div className="card animate__animated animate__bounce">
                <div className="text-center thumbnail-libro">
                    <img src={thumbnail} className="card-img-top" alt={title}/> 
                </div>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    {/*<p className="card-text"></p>*/}
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Paginas: </strong>{pages}</li>
                            <li className="list-group-item"><strong>Lenguaje: </strong>{language}</li>
                            <li className="list-group-item"><strong>Año: </strong>{publisher_date}</li>
                        </ul>
                    </div>
                    
                    <a target="_blank" rel="noopener noreferrer"  href={download}  className="btn btn-block btn-primary">Ver</a>
                </div>
            </div>
        </div>
    )
}

export default CardComponent
