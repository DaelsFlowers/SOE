import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function Pdf(info) {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const aux = 20;
    var docDefinition = {
        pageSize: 'letter',
        // by default we use portrait, you can change it to landscape if you wish
        // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
        content: [
            {

                columns: [
                    //part0
                    {
                        width: 100,
                        text: "FOLIO\n" + info.folio0,
                        style: "labelsc",
                        absolutePosition: { x: 500, y: 25 },
                    },
                    {
                        width: 100,
                        text: "CIUDAD\n" + info.ciudad0,
                        style: "labelsc",
                        absolutePosition: { x: 350, y: 10 }
                    },
                    {
                        width: 100,
                        text: "FECHA\n" + date,
                        style: "labelsc",
                        absolutePosition: { x: 350, y: 50 }
                    },
                    //part1
                    {
                        width: 40,
                        text: "DATOS DE LA FACTURACION DE CLIENTE",
                        style: "titulo",
                        absolutePosition: { x: 10, y: 75 + aux }
                    },
                    {
                        width: 40,
                        text: "NOMBRE COMERCIAL:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 100 + aux }
                    },
                    {
                        width: 100,
                        text: info.nombreComercial1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 100 + aux }
                    },
                    {
                        width: 40,
                        text: "GIRO:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 100 + aux }
                    },
                    {
                        width: 100,
                        text: info.giro1,
                        style: "inputs",
                        absolutePosition: { x: 340, y: 100 + aux }
                    },
                    {
                        width: 40,
                        text: "RAZON SOCIAL:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 115 + aux }
                    },
                    {
                        width: 100,
                        text: info.razonSocial1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 115 + aux }
                    },
                    {
                        width: 40,
                        text: "RFC:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 115 + aux }
                    },
                    {
                        width: 100,
                        text: info.rfc1,
                        style: "inputs",
                        absolutePosition: { x: 340, y: 115 + aux }
                    },


                    {
                        width: 40,
                        text: "CALLE:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 130 + aux }
                    },
                    {
                        width: 100,
                        text: info.calle1,
                        style: "inputs",
                        absolutePosition: { x: 60, y: 130 + aux }
                    },
                    {
                        width: 40,
                        text: "NO.:",
                        style: "labels",
                        absolutePosition: { x: 160, y: 130 + aux }
                    },
                    {
                        width: 100,
                        text: info.numero1,
                        style: "inputs",
                        absolutePosition: { x: 200, y: 130 + aux }
                    },
                    {
                        width: 40,
                        text: "COLONIA:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 130 + aux }
                    },
                    {
                        width: 100,
                        text: info.colonia1,
                        style: "inputs",
                        absolutePosition: { x: 340, y: 130 + aux }
                    },
                    {
                        width: 40,
                        text: "CP:",
                        style: "labels",
                        absolutePosition: { x: 500, y: 130 + aux }
                    },
                    {
                        width: 100,
                        text: info.cp1,
                        style: "inputs",
                        absolutePosition: { x: 520, y: 130 + aux }
                    },





                    {
                        width: 40,
                        text: "E-MAIL DE FACTURAS:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 145 + aux }
                    },
                    {
                        width: 100,
                        text: info.emailfacturas1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 145 + aux }
                    },
                    {
                        width: 40,
                        text: "CIUDAD:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 145 + aux }
                    },
                    {
                        width: 100,
                        text: info.ciudad1,
                        style: "inputs",
                        absolutePosition: { x: 340, y: 145 + aux }
                    },
                    {
                        width: 40,
                        text: "ESTADO:",
                        style: "labels",
                        absolutePosition: { x: 430, y: 145 + aux }
                    },
                    {
                        width: 100,
                        text: info.estado1,
                        style: "inputs",
                        absolutePosition: { x: 470, y: 145 + aux }
                    },



                    {
                        width: 40,
                        text: "METODO DE PAGO:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 160 + aux }
                    },
                    {
                        width: 100,
                        text: info.metodoPago1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 160 + aux }
                    },
                    {
                        width: 40,
                        text: "FORMA DE PAGO:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 175 + aux }
                    },
                    {
                        width: 100,
                        text: info.formaPago1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 175 + aux }
                    },
                    {
                        width: 40,
                        text: "USO DE CFDI:",
                        style: "labels",
                        absolutePosition: { x: 10, y: 190 + aux }
                    },
                    {
                        width: 100,
                        text: info.usoCFDI1,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 190 + aux }
                    },

                    //------------------------------------------------------------------
                    {
                        width: 40,
                        text: "DATOS DEL CONTRATANTE",
                        style: "titulo",
                        absolutePosition: { x: 10, y: 230 }
                    },
                    {
                        width: 40,
                        text: "NOMBRE :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 250 }
                    },
                    {
                        width: 100,
                        text: info.nombre2,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 250 }
                    },
                    {
                        width: 40,
                        text: "E-MAIL:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 250 }
                    },
                    {
                        width: 100,
                        text: info.email2,
                        style: "inputs",
                        absolutePosition: { x: 380, y: 250 }
                    },

                    {
                        width: 40,
                        text: "CARGO :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 265 }
                    },
                    {
                        width: 100,
                        text: info.cargo2,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 265 }
                    },
                    {
                        width: 40,
                        text: "TEL.OFICINA:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 265 }
                    },
                    {
                        width: 100,
                        text: info.telOficina2,
                        style: "inputs",
                        absolutePosition: { x: 380, y: 265 }
                    },
                    {
                        width: 40,
                        text: "CELULAR :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 280 }
                    },
                    {
                        width: 100,
                        text: info.celular2,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 280 }
                    },
                    //------------------------------------------------------------------
                    {
                        width: 40,
                        text: "DATOS DEL EJECUTIVO",
                        style: "titulo",
                        absolutePosition: { x: 10, y: 300 }
                    },
                    {
                        width: 40,
                        text: "NOMBRE :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 320 }
                    },
                    {
                        width: 100,
                        text: info.nombre3,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 320 }
                    },
                    {
                        width: 40,
                        text: "E-MAIL:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 320 }
                    },
                    {
                        width: 100,
                        text: info.email3,
                        style: "inputs",
                        absolutePosition: { x: 380, y: 320 }
                    },

                    {
                        width: 40,
                        text: "CARGO :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 335 }
                    },
                    {
                        width: 100,
                        text: info.cargo3,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 335 }
                    },
                    {
                        width: 40,
                        text: "TEL.OFICINA:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 335 }
                    },
                    {
                        width: 100,
                        text: info.telOficina3,
                        style: "inputs",
                        absolutePosition: { x: 380, y: 335 }
                    },
                    {
                        width: 40,
                        text: "CELULAR :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 350 }
                    },
                    {
                        width: 100,
                        text: info.celular3,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 350 }
                    },
                    //------------------------------------------------------------------
                    {
                        width: 40,
                        text: "MEDIOS PUBLICITARIOS Y LUGAR DE CONTRATACION",
                        style: "titulo",
                        absolutePosition: { x: 10, y: 370 }
                    },
                    {
                        width: 40,
                        text: "MEDIO PUBLICITARIO :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 390 }
                    },
                    {
                        width: 100,
                        text: info.medio4,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 390 }
                    },
                    {
                        width: 40,
                        text: "CIUDAD :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 405 }
                    },
                    {
                        width: 100,
                        text: info.ciudad4,
                        style: "inputs",
                        absolutePosition: { x: 100, y: 405 }
                    },
                    {
                        width: 40,
                        text: "ESTADO:",
                        style: "labels",
                        absolutePosition: { x: 300, y: 405 }
                    },
                    {
                        width: 100,
                        text: info.estado4,
                        style: "inputs",
                        absolutePosition: { x: 380, y: 405 }
                    },
                    //------------------------------------------------------------------
                    {
                        width: 40,
                        text: "DURACION",
                        style: "titulo",
                        absolutePosition: { x: 10, y: 425 }
                    },
                    {
                        width: 40,
                        text: "DESDE :",
                        style: "labels",
                        absolutePosition: { x: 10, y: 445 }
                    },
                    {
                        width: 100,
                        text: info.desde5,
                        style: "inputs",
                        absolutePosition: { x: 50, y: 445 }
                    },
                    {
                        width: 40,
                        text: "HASTA:",
                        style: "labels",
                        absolutePosition: { x: 120, y: 445 }
                    },
                    {
                        width: 100,
                        text: info.hasta5,
                        style: "inputs",
                        absolutePosition: { x: 160, y: 445 }
                    },
                    {
                        width: 40,
                        text: "NOTA:",
                        style: "labels",
                        absolutePosition: { x: 250, y: 445 }
                    },
                    {
                        width: 200,
                        text: info.nota5,
                        style: "inputs",
                        absolutePosition: { x: 280, y: 445 }
                    },
                    //------------------------------------------------------------------
                    {
                        width: 100,
                        text: "CANTIDAD \n\n" +
                            info.cantidad15 + "\n \n" +
                            info.cantidad25 + "\n \n" +
                            info.cantidad35 + "\n \n",
                        style: "labelsc",
                        absolutePosition: { x: -500, y: 480 }
                    },
                    {
                        width: 100,
                        text: "CONCEPTO DE LA CONTRATACION \n\n" +
                            info.concepto15 + "\n \n" +
                            info.concepto25 + "\n \n" +
                            info.concepto35 + "\n \n",
                        style: "labelsc",
                        absolutePosition: { x: -250, y: 480 }
                    },
                    {
                        width: 100,
                        text: "REFENCIA \n\n" +
                            info.referencia15 + "\n \n" +
                            info.referencia25 + "\n \n" +
                            info.referencia35 + "\n \n",
                        style: "labelsc",
                        absolutePosition: { x: 50, y: 480 }
                    },
                    {
                        width: 100,
                        text: "PRECIO UNITARIO \n\n" +
                            info.precio15 + "\n \n" +
                            info.precio25 + "\n \n" +
                            info.precio35 + "\n \n",
                        style: "labelsc",
                        absolutePosition: { x: 300, y: 480 }
                    },
                    {
                        width: 100,
                        text: "TOTAL \n\n" +
                            info.total15 + "\n \n" +
                            info.total25 + "\n \n" +
                            info.total35 + "\n \n",
                        style: "labelsc",
                        absolutePosition: { x: 450, y: 480 }
                    },


                ],
            },
        ],
        styles: {
            inputs: {
                fontSize: 9,
                bold: true,
                alignment: 'left',
                background: "#eee"
            },
            labels: {
                fontSize: 8,
                alignment: 'left',
                color: "#333"
            },
            labelsc: {
                fontSize: 10,
                alignment: 'center',
                bold: true,
            },
            titulo: {
                fontSize: 14,
                alignment: 'center',
                bold: true,
                background: "#ddd"
            }
        }
    };
    pdfMake.createPdf(docDefinition).download();

}
export default Pdf