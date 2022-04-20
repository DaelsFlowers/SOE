import React from 'react'

import "./Navbar.css";

function Navbar() {
    const folionum = 1;
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <a class="navbar-brand" className='titulopag' href="google.com">GENERADOR DE CONTRATOS</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" className='nav-link' href="google.com">INICIO <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" className='nav-link' href="google.com">CRM</a>
                        </li>
                    </ul>
                    <div className='generarbutton'>

                        <div className='buttongenerar'>
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">GENERAR</button>
                            </form>
                        </div>
                        <div className='foliodiv'>
                            <div className='labelfolio'>
                                FOLIO:
                            </div>
                            <div className='folionum'>{folionum}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar