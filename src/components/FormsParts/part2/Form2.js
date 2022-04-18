import React from 'react'
import "./Form2.css"

function Form2() {
    return (
        <div className='contenidoform2'>
            <div className='tituloform2'>DATOS DE FACTURACION DE CLIENTE</div>
            <div className='part1form2'>
                <div className="form2div">
                    <label className='label1form2'>NOMBRE COMERCIAL
                        <input className='input1form2' />
                    </label>
                </div>
                <div className="form2div">
                    <label className='label1form2'> GIRO
                        <input className='input1form2' />
                    </label>
                </div>
            </div>
            <div className='part1form2'>
                <div className="form2div">
                    <label className='label1form2'>RAZON SOCIAL
                        <input className='input1form2' />
                    </label>
                </div>
                <div className="form2div">
                    <label className='label1form2'>RFC
                        <input className='input1form2' />
                    </label>
                </div>
            </div>
            <div className='part3form2'></div>
            <div className='part4form2'></div>
            <div className='part5form2'></div>
        </div>
    )
}

export default Form2