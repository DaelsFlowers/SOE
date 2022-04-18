import React from 'react'
import Navbar from './Navbar'
import Form1 from "./FormsParts/Form1.js"
import "./GenCont.css"
function GenCont() {
    return (
        <div className='content'>
            <Navbar />
            <Form1 />
        </div>
    )
}

export default GenCont