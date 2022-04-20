import React from 'react'
import "./Form1.css"

function Form1() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    let count = 1;
    return (
        <div className='part1'>
            <div className='imagenlogo'>LOGOTIPO</div>
            <div className='form1'>
                <div className="form11">
                    <div className="label">CIUDAD
                        <input className="input" type="text" />
                    </div>
                    <div className="label">FECHA
                        <div className='folio'> {date}</div>
                    </div>
                </div>
                <div className="label"> FOLIO
                    <div className='folio'>{count}</div>
                </div>
                <div className="buttons">
                    <div className='Clear'>LIMPIADO PARCIAL</div>
                    <div className='Clear'>LIMPIAR</div>
                </div>
            </div>
        </div>
    )
}

export default Form1