import React from 'react'
import "./Part0.css"

function Part0() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className='contenido0'>
            <div className='contenedor01'>

            </div>
            <div className='contenedor02'>
                <div className='etiqueta01'>
                    <div className='label01'>
                        CIUDAD
                    </div>
                    <div className='input01'>
                        <input type="text" class="form-control" placeholder="Default input" id="inputDefault" field_signature="2162400822" form_signature="12467138301455459073" form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword" visibility_annotation="true" />
                    </div>
                </div>
                <div className='etiqueta01'>
                    <div className='label01'>
                        FECHA
                    </div>
                    <div className='input01'>
                        <input type="text" class="form-control" placeholder={date} id="inputDefault" field_signature="2162400822" form_signature="12467138301455459073" form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword" visibility_annotation="true" />
                    </div>
                </div>
            </div>
            <div className='contenedor03'>
                <div className='button02'>
                    LIMPIAR
                </div>
                <div className='button01'>
                    LIMPIADO PARCIAL
                </div>
            </div>
        </div>
    )
}

export default Part0