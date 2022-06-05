import React from 'react'
import "./Navbar.css";
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <div class="navbar-brand" className='titulopag' style={{ cursor: "default" }}>GENERADOR DE CONTRATOS <div style={{ fontSize: 10 }} >version 0.5.8 beta</div></div>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <div class="nav-link" className='nav-link' style={{ cursor: "default" }} >PROXIMAMENTE <span class="sr-only"></span></div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link" className='nav-link' style={{ cursor: "default" }}>PROXIMAMENTE</div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar