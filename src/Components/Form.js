import React, { useState } from 'react'
import "./Form.css"
import Pdf from "./PdfGenerator"


function Forms() {


    const [informacion, setInformacion] = useState({
        folio0: "",
        ciudad0: "",
        nombreComercial1: "",
        giro1: "",
        razonSocial1: "",
        rfc1: "",
        calle1: "",
        numero1: "",
        colonia1: "",
        cp1: "",
        emailfacturas1: "",
        ciudad1: "",
        estado1: "",
        metodoPago1: "",
        formaPago1: "",
        usoCFDI1: "",
        nombre2: "",
        email2: "",
        cargo2: "",
        telOficina2: "",
        celular2: "",

        nombre3: "",
        email3: "",
        cargo3: "",
        telOficina3: "",
        celular3: "",

        medio4: "",
        ciudad4: "",
        estado4: "",

        desde5: "",
        hasta5: "",
        nota5: "",
        cantidad15: "",
        cantidad25: "",
        cantidad35: "",
        concepto15: "",
        concepto25: "",
        concepto35: "",
        referencia15: "",
        referencia25: "",
        referencia35: "",
        precio15: "",
        precio25: "",
        precio35: "",
        notas5: "",
        subtotal15: "",
        descuento5: "",
        subtotal25: "",
        iva5: "",
        totalfinal5: "",
    })



    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleChange = (event) => {
        setInformacion({ ...informacion, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(informacion);
        Pdf(informacion)
        /*
        setInformacion({
            folio0: "",
            ciudad0: "",
            fecha0: "",
            nombreComercial1: "",
            giro1: "",
            razonSocial1: "",
            rfc1: "",
            calle1: "",
            numero1: "",
            colonia1: "",
            cp1: "",
            emailfacturas1: "",
            ciudad1: "",
            estado1: "",
            metodoPago1: "",
            formaPago1: "",
            usoCFDI1: "",
    
            nombre2: "",
            email2: "",
            cargo2: "",
            telOficina2: "",
            celular2: "",
    
            nombre3: "",
            email3: "",
            cargo3: "",
            telOficina3: "",
            celular3: "",
    
            medio4: "",
            ciudad4: "",
            estado4: "",
    
            desde5: "",
            hasta5: "",
            nota5: "",
            cantidad15: "",
            cantidad25: "",
            cantidad35: "",
            concepto15: "",
            concepto25: "",
            concepto35: "",
            referencia15: "",
            referencia25: "",
            referencia35: "",
            precio15: "",
            precio25: "",
            precio35: "",
            total15: "",
            total25: "",
            total35: "",
            notas5: "",
            subtotal15: "",
            descuento5: "",
            subtotal25: "",
            iva5: "",
            totalfinal5: "",
        })*/
    };

    const handClear = (event) => {
        setInformacion({
            folio0: "",
            ciudad0: "",
            fecha0: "",
            nombreComercial1: "",
            giro1: "",
            razonSocial1: "",
            rfc1: "",
            calle1: "",
            numero1: "",
            colonia1: "",
            cp1: "",
            emailfacturas1: "",
            ciudad1: "",
            estado1: "",
            metodoPago1: "",
            formaPago1: "",
            usoCFDI1: "",

            nombre2: "",
            email2: "",
            cargo2: "",
            telOficina2: "",
            celular2: "",

            nombre3: "",
            email3: "",
            cargo3: "",
            telOficina3: "",
            celular3: "",

            medio4: "",
            ciudad4: "",
            estado4: "",

            desde5: "",
            hasta5: "",
            nota5: "",
            cantidad15: "",
            cantidad25: "",
            cantidad35: "",
            concepto15: "",
            concepto25: "",
            concepto35: "",
            referencia15: "",
            referencia25: "",
            referencia35: "",
            precio15: "",
            precio25: "",
            precio35: "",
            total15: "",
            total25: "",
            total35: "",
            notas5: "",
            subtotal15: "",
            descuento5: "",
            subtotal25: "",
            iva5: "",
            totalfinal5: "",
        })
    }
    if (informacion.total15 === "NaN") {
        informacion.total15 = "0";
    }


    return (
        <div>
            <form>
                <div>
                    <div className='contenido0'>
                        <div className='contenedor01'>
                        </div>
                        <div className='contenedor02'>
                            <div className='etiqueta01'>
                                <div className='label01'>
                                    CIUDAD
                                </div>
                                <div className='input01'>
                                    <input
                                        type="text"
                                        name='ciudad0'
                                        value={informacion.ciudad0}
                                        class="form-control"
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta01'>
                                <div className='label01'>
                                    FECHA
                                </div>
                                <div className='input01'>
                                    <label
                                        class="form-control"
                                        value={informacion.fecha0}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" >{date}</label>
                                </div>
                            </div>
                        </div>
                        <div className='contenedor03'>
                            <div className='button02' onClick={handClear}>
                                LIMPIAR
                            </div>
                            <div className='button01' onClick={handClear}>
                                LIMPIADO PARCIAL
                            </div>
                        </div>
                    </div>


                    <div>

                        <div className='titulo'>
                            DATOS DE LA FACTURACION DE CLIENTE
                        </div>

                        <div className="formulario1">

                            <div className="contenedor1">
                                <div className="etiqueta1">
                                    <div className="label1">
                                        NOMBRE COMERCIAL
                                    </div>
                                    <div className="input1">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='nombreComercial1'
                                            value={informacion.nombreComercial1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta1">
                                    <div className="label1">
                                        RAZON SOCIAL
                                    </div>
                                    <div className="input1">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='razonSocial1'
                                            value={informacion.razonSocial1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta2">
                                    <div className="label2">
                                        CALLE
                                    </div>
                                    <div className="input2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='calle1'
                                            value={informacion.calle1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta3">
                                    <div className="label3">
                                        NO.
                                    </div>
                                    <div className="input3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='numero1'
                                            value={informacion.numero1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta1">
                                    <div className="label1">
                                        E-MAIL DE FACTURAS
                                    </div>
                                    <div className="input1">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='emailfacturas1'
                                            value={informacion.emailfacturas1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor2">
                                <div className="etiqueta1">
                                    <div className="label1">
                                        GIRO
                                    </div>
                                    <div className="input1">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='giro1'
                                            value={informacion.giro1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta1">
                                    <div className="label1">
                                        RFC
                                    </div>
                                    <div className="input1">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='rfc1'
                                            value={informacion.rfc1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta2">
                                    <div className="label2">
                                        COLONIA
                                    </div>
                                    <div className="input2">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='colonia1'
                                            value={informacion.colonia1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta3">
                                    <div className="label3">
                                        CP
                                    </div>
                                    <div className="input3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='cp1'
                                            value={informacion.cp1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta4">
                                    <div className="label4">
                                        CIUDAD
                                    </div>
                                    <div className="input4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name='ciudad1'
                                            value={informacion.ciudad1}
                                            id="inputDefault"
                                            onChange={handleChange}
                                            field_signature="2162400822"
                                            form_signature="12467138301455459073"
                                            form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                            visibility_annotation="true" />
                                    </div>
                                </div>
                                <div className="etiqueta4">
                                    <div className="label40">
                                        ESTADO
                                    </div>
                                    <div className="input4">
                                        <select
                                            class="form-select"
                                            id="estados"
                                            name='estado1'
                                            value={informacion.estado1}
                                            onChange={handleChange}
                                            field_signature="2609679323"
                                            form_signature="15652032749810445774"
                                            form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                            visibility_annotation="true">
                                            <option></option>
                                            <option>AGUASCALIENTES</option>
                                            <option>BAJA CALIFORNIA</option>
                                            <option>BAJA CALIFORNIA SUR</option>
                                            <option>CAMPECHE</option>
                                            <option>CHIAPAS</option>
                                            <option>CHIHUAHUA</option>
                                            <option>CIUDAD DE MÉXICO</option>
                                            <option>COAHUILA</option>
                                            <option>COLIMA</option>
                                            <option>DURANGO</option>
                                            <option>GUANAJUATO</option>
                                            <option>GUERRERO</option>
                                            <option>HIDALGO</option>
                                            <option>JALISCO</option>
                                            <option>MÉXICO</option>
                                            <option>MICHOACÁN</option>
                                            <option>MORELOS</option>
                                            <option>NAYARIT</option>
                                            <option>NUEVO LEÓN</option>
                                            <option>OAXACA</option>
                                            <option>PUEBLA</option>
                                            <option>QUERÉTARO</option>
                                            <option>QUINTANA ROO</option>
                                            <option>SAN LUIS POTOSÍ</option>
                                            <option>SINALOA</option>
                                            <option>SONORA</option>
                                            <option>TABASCO</option>
                                            <option>TAMAULIPAS</option>
                                            <option>TLAXCALA</option>
                                            <option>VERACRUZ</option>
                                            <option>YUCATÁN</option>
                                            <option>ZACATECAS</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor3">
                                <div className="etiqueta5">
                                    <div className="label5">
                                        METODO DE PAGO
                                    </div>
                                    <div className="input5">
                                        <select
                                            class="form-select"
                                            id="metodopago"
                                            name='metodoPago1'
                                            value={informacion.metodoPago1}
                                            onChange={handleChange}
                                            field_signature="2609679323"
                                            form_signature="15652032749810445774"
                                            form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                            visibility_annotation="true">
                                            <option></option>
                                            <option>PUE: PAGO EN UNA SOLA EXHIBICÍPON</option>
                                            <option>PPD: PAGO EN PARCIALIDADES ODIFERIDO</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="etiqueta5">
                                    <div className="label5">
                                        FORMA DE PAGO
                                    </div>
                                    <div className="input5">
                                        <select
                                            class="form-select"
                                            id="formapago"
                                            name='formaPago1'
                                            value={informacion.formaPago1}
                                            onChange={handleChange}
                                            field_signature="2609679323"
                                            form_signature="15652032749810445774"
                                            form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                            visibility_annotation="true">
                                            <option></option>
                                            <option>001 EFECTIVO</option>
                                            <option>002 CHEQUE NOMINATIVO</option>
                                            <option>003 TRANSFERENCIA ELECTRÓNICA DE FONDOS SPEI</option>
                                            <option>004 TARJETA DE CRÉDITO</option>
                                            <option>005 MONEDERO ELECTRONICO</option>
                                            <option>006 DINERO ELECTRÓNICO</option>
                                            <option>008 VALES DE DESPENSA</option>
                                            <option>012 DACIÓN EN PAGO</option>
                                            <option>013 PAGO POR SUBROGACÍON</option>
                                            <option>014 PAGO POR CONSIGNACÍON</option>
                                            <option>015 CONDONACIÍON</option>
                                            <option>017 COMPENSACÍON</option>
                                            <option>023 NOVACIÓN</option>
                                            <option>024 CONFUSIÓN</option>
                                            <option>025 REMISION DE DEUDA</option>
                                            <option>026 PRESCRIPCIÓN O CADUCUDAD</option>
                                            <option>027 A SATISFACCIÓN DEL ACREEDOR</option>
                                            <option>028 TARJETA DE DÉBITO</option>
                                            <option>029 TARJETA DE SERVICIOS</option>
                                            <option>030 APLICACIÓN DE ANTICIPOS</option>
                                            <option>031 INTERMEDIARIO PAGOS</option>
                                            <option>099 POR DEFINIR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="etiqueta5">
                                    <div className="label5">
                                        USO DE CFDI
                                    </div>
                                    <div className="input5">
                                        <select
                                            class="form-select"
                                            id="usoCFDI"
                                            name='usoCFDI1'
                                            value={informacion.usoCFDI1}
                                            onChange={handleChange}
                                            field_signature="2609679323"
                                            form_signature="15652032749810445774"
                                            form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                            visibility_annotation="true">
                                            <option></option>
                                            <option>G01 ADQUISICIÓN DE MERCANCIAS</option>
                                            <option>G02 DEVOLUCIONES, DESCUENTOS O BONIFICACIONES</option>
                                            <option>G03 GASTOS EN GENERAL</option>
                                            <option>I01 CONSTRUCCIONES</option>
                                            <option>I02 MOBILIARIO Y EQUIPO DE OFICINA POR INVERSIONES</option>
                                            <option>I03 EQUIPO DE TRANSPORTE</option>
                                            <option>I04 EQUIPO DE COMPUTO Y ACCESORIOS</option>
                                            <option>I05 DADOS, TROQUELES, MOLDES, MATRICES Y HERRAMENTAL</option>
                                            <option>I06 COMUNICACIONES TELEFONICAS</option>
                                            <option>I07 COMUNICACIONES SATELITALES</option>
                                            <option>I08 OTRA MAQUINARIA Y EQUIPO</option>
                                            <option>D01 HONORARIOS MEDICOS, DENTALESY GASTOS HOSPITALARIOS</option>
                                            <option>D02 GASTOS MEDICOS POR INCAPACIDAD O DISCAPACIDAD</option>
                                            <option>D03 GASTOS FUNERALES</option>
                                            <option>D04 DONATIVOS</option>
                                            <option>D05 INTERESES POR CREDITOS HIPOTECARIOS</option>
                                            <option>D06 APORTACIONES VOLUNTARIOAS AL SAR</option>
                                            <option>D07 PRIMAS POR SEGUROS DE GASTOS MEDICOS</option>
                                            <option>D08 GASTOS DE TRANSPORTACION ESCOLAR OBLIGATORIA</option>
                                            <option>D09 DEPOSITOS EN CUENTAS PARA EL AHORRO, PRIMAS CON BASE</option>
                                            <option>D10 PAGOS POR SERVICIOS EDUCATIVOS(COLEGIATURAS)</option>
                                            <option>P01 POR DEFINIR</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='titulo'>
                        DATOS DEL CONTRATANTE
                    </div>
                    <div className='formulario2'>
                        <div className='contenedor21'>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    NOMBRE
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='nombre2'
                                        value={informacion.nombre2}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    E-MAIL
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='email2'
                                        value={informacion.email2}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    CARGO
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='cargo2'
                                        value={informacion.cargo2}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    TEL. OFICINA
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='telOficina2'
                                        value={informacion.telOficina2}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                        <div className='contenedor22'>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    CELULAR
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='celular2'
                                        value={informacion.celular2}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='titulo'>
                        DATOS DEL EJECUTIVO
                    </div>
                    <div className='formulario2'>
                        <div className='contenedor21'>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    NOMBRE
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='nombre3'
                                        value={informacion.nombre3}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    E-MAIL
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='email3'
                                        value={informacion.email3}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    CARGO
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='cargo3'
                                        value={informacion.cargo3}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    TEL. OFICINA
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='telOficina3'
                                        value={informacion.telOficina3}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                        <div className='contenedor22'>
                            <div className='etiqueta21'>
                                <div className='label21'>
                                    CELULAR
                                </div>
                                <div className='input21'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='celular3'
                                        value={informacion.celular3}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='titulo'>
                        MEDIOS PUBLICITARIOS Y LUGAR DE CONTRATACION
                    </div>
                    <div className='formulario3'>
                        <div className='contenedor31'>
                            <div className='etiqueta32'>
                                <div className='label32'>
                                    MEDIO PUBLICITARIO
                                </div>
                                <div className='input32'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='medio4'
                                        value={informacion.medio4}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                        <div className='contenedor32'>
                            <div className='etiqueta31'>
                                <div className='label31'>
                                    CIUDAD
                                </div>
                                <div className='input31'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='ciudad4'
                                        value={informacion.ciudad4}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta31'>
                                <div className='label31'>
                                    ESTADO
                                </div>
                                <div className='input31'>
                                    <select
                                        class="form-select"
                                        id="estado4"
                                        name='estado4'
                                        value={informacion.estado4}
                                        onChange={handleChange}
                                        field_signature="2609679323"
                                        form_signature="15652032749810445774"
                                        form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                        visibility_annotation="true">
                                        <option></option>
                                        <option>AGUASCALIENTES</option>
                                        <option>BAJA CALIFORNIA</option>
                                        <option>BAJA CALIFORNIA SUR</option>
                                        <option>CAMPECHE</option>
                                        <option>CHIAPAS</option>
                                        <option>CHIHUAHUA</option>
                                        <option>CIUDAD DE MÉXICO</option>
                                        <option>COAHUILA</option>
                                        <option>COLIMA</option>
                                        <option>DURANGO</option>
                                        <option>GUANAJUATO</option>
                                        <option>GUERRERO</option>
                                        <option>HIDALGO</option>
                                        <option>JALISCO</option>
                                        <option>MÉXICO</option>
                                        <option>MICHOACÁN</option>
                                        <option>MORELOS</option>
                                        <option>NAYARIT</option>
                                        <option>NUEVO LEÓN</option>
                                        <option>OAXACA</option>
                                        <option>PUEBLA</option>
                                        <option>QUERÉTARO</option>
                                        <option>QUINTANA ROO</option>
                                        <option>SAN LUIS POTOSÍ</option>
                                        <option>SINALOA</option>
                                        <option>SONORA</option>
                                        <option>TABASCO</option>
                                        <option>TAMAULIPAS</option>
                                        <option>TLAXCALA</option>
                                        <option>VERACRUZ</option>
                                        <option>YUCATÁN</option>
                                        <option>ZACATECAS</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='titulo'>
                        DURACION
                    </div>
                    <div className='formulario5'>
                        <div className='contenedor51'>
                            <div className='etiqueta51'>
                                <div className='label51'>
                                    DESDE
                                </div>
                                <div className='input51'>
                                    <input
                                        type="date"
                                        class="form-control"
                                        name='desde5'
                                        value={informacion.desde5}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta51'>
                                <div className='label51'>
                                    HASTA
                                </div>
                                <div className='input51'>
                                    <input
                                        type="date"
                                        class="form-control"
                                        name='hasta5'
                                        value={informacion.hasta5}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta52'>
                                <div className='label52'>
                                    NOTA
                                </div>
                                <div className='input52'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='nota5'
                                        value={informacion.nota5}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                        <div className='tabla5'>
                            <div className='contenedor52'>
                                <div className='label53'>
                                    CANTIDAD
                                </div>
                                <div className='input53'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='cantidad15'
                                        value={informacion.cantidad15}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input53'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='cantidad25'
                                        value={informacion.cantidad25}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input53'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='cantidad35'
                                        value={informacion.cantidad35}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='contenedor53'>
                                <div className='label54'>
                                    CONCEPTO DE LA CONTRATACION
                                </div>
                                <div className='input54'>
                                    <select
                                        class="form-select"
                                        id="concepto15"
                                        name='concepto15'
                                        value={informacion.concepto15}
                                        onChange={handleChange}
                                        field_signature="2609679323"
                                        form_signature="15652032749810445774"
                                        form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                        visibility_annotation="true">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className='input54'>
                                    <select
                                        class="form-select"
                                        id="concepto25"
                                        name='concepto25'
                                        value={informacion.concepto25}
                                        onChange={handleChange}
                                        field_signature="2609679323"
                                        form_signature="15652032749810445774"
                                        form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                        visibility_annotation="true">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className='input54'>
                                    <select
                                        class="form-select"
                                        id="concepto35"
                                        name='concepto35'
                                        value={informacion.concepto35}
                                        onChange={handleChange}
                                        field_signature="2609679323"
                                        form_signature="15652032749810445774"
                                        form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                        visibility_annotation="true">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className='contenedor53'>
                                <div className='label54'>
                                    REFERENCIA
                                </div>
                                <div className='input54'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='referencia15'
                                        value={informacion.referencia15}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input54'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='referencia25'
                                        value={informacion.referencia25}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input54'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='referencia35'
                                        value={informacion.referencia35}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='contenedor54'>
                                <div className='label55'>
                                    PRECIO UNITARIO
                                </div>
                                <div className='input55'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='precio15'
                                        value={informacion.precio15}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input55'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='precio25'
                                        value={informacion.precio25}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input55'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='precio35'
                                        value={informacion.precio35}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='contenedor54'>
                                <div className='label55'>
                                    TOTAL
                                </div>
                                <div className='input55'>
                                    <input
                                        class="form-control"
                                        name='total15'
                                        value={"$" + (Intl.NumberFormat("en-IN", { maximumFractionDigits: 4 }).format((parseFloat(informacion.cantidad15) * parseFloat(informacion.precio15)).toFixed(2)))}
                                        disabled={true}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input55'>
                                    <input
                                        class="form-control"
                                        name='total25'
                                        value={"$" + (Intl.NumberFormat("en-IN", { maximumFractionDigits: 4 }).format((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2)))}
                                        disabled={true}
                                        id="inputDefault"
                                        onChangeCapture={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                                <div className='input55'>
                                    <input
                                        class="form-control"
                                        name='total35'
                                        value={"$" + (Intl.NumberFormat("en-IN", { maximumFractionDigits: 4 }).format((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))}
                                        disabled={true}
                                        id="inputDefault"
                                        onChangeCapture={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                        <div className='contenedor55'>
                            <div className='label56'>
                                NOTAS
                            </div>
                            <div className='input56'>
                                <textarea
                                    class="form-control"
                                    id="exampleTextarea"
                                    name='notas5'
                                    value={informacion.notas5}
                                    onChange={handleChange}
                                    rows="6"
                                    field_signature="3789293528"
                                    form_signature="15652032749810445774"
                                    form_signature_string="https://bootswatch.com&amp;&amp;staticEmail&amp;exampleInputEmail1&amp;exampleInputPassword1&amp;exampleSelect1&amp;exampleTextarea"
                                    visibility_annotation="true">
                                </textarea>
                            </div>
                        </div>
                        <div className='contenedor56'>
                            <div className='etiqueta53'>
                                <div className='label57'>
                                    SUB TOTAL
                                </div>
                                <div className='input57'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='subtotal15'
                                        disabled={true}
                                        value={"$" +
                                            (Intl.NumberFormat
                                                ("en-IN", { maximumFractionDigits: 4 }).format((
                                                    parseFloat(((parseFloat(informacion.cantidad15) * parseFloat(informacion.precio15)).toFixed(2))) +
                                                    parseFloat(((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2))) +
                                                    parseFloat(((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))
                                                ).toFixed(2)))}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta53'>
                                <div className='label57'>
                                    DESCUENTO
                                </div>
                                <div className='input57'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='descuento5'
                                        value={informacion.descuento5}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta53'>
                                <div className='label57'>
                                    SUB TOTAL
                                </div>
                                <div className='input57'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='subtotal25'
                                        disabled={true}
                                        value={"$" +
                                            (Intl.NumberFormat
                                                ("en-IN", { maximumFractionDigits: 4 }).format((
                                                    (parseFloat(((parseFloat(informacion.cantidad15) * parseFloat(informacion.precio15)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))) -
                                                    parseFloat(informacion.descuento5)
                                                ).toFixed(2)))}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta53'>
                                <div className='label57'>
                                    IVA
                                </div>
                                <div className='input57'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='iva5'
                                        disabled={true}
                                        value={"$" +
                                            (Intl.NumberFormat
                                                ("en-IN", { maximumFractionDigits: 4 }).format((
                                                    ((parseFloat(((parseFloat(informacion.cantidad15) * parseFloat(informacion.precio15)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))) -
                                                        parseFloat(informacion.descuento5)) * 0.16
                                                ).toFixed(2)))}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                            <div className='etiqueta53'>
                                <div className='label57'>
                                    TOTAL
                                </div>
                                <div className='input57'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name='totalfinal5'
                                        disabled={true}
                                        value={"$" +
                                            (Intl.NumberFormat
                                                ("en-IN", { maximumFractionDigits: 2 }).format((
                                                    (((parseFloat(((parseFloat(informacion.cantidad15) * parseFloat(informacion.precio15)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2))) +
                                                        parseFloat(((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))) -
                                                        parseFloat(informacion.descuento5)) * 0.16) + ((parseFloat(((parseFloat(informacion.cantidad15) *
                                                            parseFloat(informacion.precio15)).toFixed(2))) +
                                                            parseFloat(((parseFloat(informacion.cantidad25) * parseFloat(informacion.precio25)).toFixed(2))) +
                                                            parseFloat(((parseFloat(informacion.cantidad35) * parseFloat(informacion.precio35)).toFixed(2)))) -
                                                            parseFloat(informacion.descuento5))
                                                ).toFixed(2)))}
                                        id="inputDefault"
                                        onChange={handleChange}
                                        field_signature="2162400822"
                                        form_signature="12467138301455459073"
                                        form_signature_string="https://bootswatch.com&amp;&amp;disabledInput&amp;readOnlyInput&amp;inputValid&amp;inputInvalid&amp;inputLarge&amp;inputDefault&amp;inputSmall&amp;&amp;&amp;floatingInput&amp;floatingPassword"
                                        visibility_annotation="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button class="btn btn-outline-dark my-4 my-xl-0" onClick={handleSubmit}>GENERAR</button>

        </div>
    )
}

export default Forms