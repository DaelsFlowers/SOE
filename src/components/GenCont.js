import React from 'react'
import Navbar from './Navbar'
import Form1 from "./FormsParts/part1/Form1.js"
import Form2 from './FormsParts/part2/Form2'
import "./GenCont.css"


function GenCont() {
    return (
        <div className='content'>
            <Navbar />
            <Form1 />
            <Form2 />
        </div>
    )
}

export default GenCont