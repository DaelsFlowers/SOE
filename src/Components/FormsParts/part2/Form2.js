import React from 'react'
import "./Form2.css"

function Form2() {
    return (
        <div className='contenidoform2'>
            <div className='tituloform2'>DATOS DE FACTURACION DE CLIENTE</div>
            <div className='part1form2'>
                <div className="form2div">
                    <label className='label1form2'>NOMBRE COMERCIAL
                        <input className='input1form25' />
                    </label>
                </div>
                <div className="form2div">
                    <label className='label1form2'> GIRO
                        <input className='input1form25' />
                    </label>
                </div>
            </div>
            <div className='part1form2'>
                <div className="form2div">
                    <label className='label1form2'>RAZON SOCIAL
                        <input className='input1form25' />
                    </label>
                </div>
                <div className="form2div">
                    <label className='label1form2'>RFC
                        <input className='input1form25' />
                    </label>
                </div>
            </div>
            <div className='part1form22'>
                <div className="form2div2">
                    <label className='label1form2'>CALLE
                        <input className='input1form22' />
                    </label>
                </div>
                <div className="form2div3">
                    <label className='label1form2'>NO.
                        <input className='input1form21' />
                    </label>
                </div>
                <div className="form2div2">
                    <label className='label1form2'>COLONIA
                        <input className='input1form22' />
                    </label>
                </div>
                <div className="form2div3">
                    <label className='label1form2'>CP
                        <input className='input1form21' />
                    </label>
                </div>
            </div>
            <div className='part1form23'>
                <div className="form2div2">
                    <label className='label1form2'>METODO DE PAGO
                        <select name="Metodo De Pago" id="MetPag" className='dropdown'>
                            <option value="C">Cheque</option>
                            <option value="E">Efectivo</option>
                            <option value="T">Trasferencia</option>
                        </select>
                    </label>
                </div>
                <div className="form2div1">
                    <label className='label1form2'>CIUDAD
                        <input className='input1form22' />
                    </label>
                </div>
                <div className="form2div2">
                    <label className='label1form2'>ESTADO
                        <select name="Metodo De Pago" id="MetPag" className='dropdown'>
                            <option value="C">1</option>
                            <option value="E">2</option>
                            <option value="T">3</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='part1form24'>
                <div className="form2div2">
                    <label className='label1form2'>FORMA DE PAGO
                        <select name="Metodo De Pago" id="MetPag" className='dropdown'>
                            <option value="C">Cheque</option>
                            <option value="E">Efectivo</option>
                            <option value="T">Trasferencia</option>
                        </select>
                    </label>
                </div>
                <div className="form2div1">
                    <label className='label1form2'>E-MAIL DE FACTURAS
                        <input className='input1form25' />
                    </label>
                </div>
                <div className="form2div1">
                    <label className='label1form2'>USO DE CFDI
                        <input className='input1form21' />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Form2