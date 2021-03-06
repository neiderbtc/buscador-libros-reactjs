import React, { useState } from 'react'
import ContenidoComponent from './ContenidoComponent'
import InputSearch from './InputSearch'

const HeaderComponent = () =>{
    
    const [categoria, setCategoria] = useState(['java','php'])
    const resetSearch = (e) =>{
        setCategoria(['java','php'])
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href={window.location.href}>Buscador libros</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href={window.location.href} className="nav-link active"  onClick={resetSearch}>Inicio</a>
            </li>
          </ul>
          <InputSearch setCategoria={setCategoria}/>
        </div>
      </nav>
        {
            categoria.map(cat => <ContenidoComponent key={cat} category={cat} />)
        }
        </div>
    )
    
}
export default HeaderComponent
