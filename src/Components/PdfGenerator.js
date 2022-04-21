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
                        absolutePosition: { x: 120, y: 100 + aux }
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
                        absolutePosition: { x: 120, y: 115 + aux }
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
                        absolutePosition: { x: 360, y: 130 + aux }
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
                        absolutePosition: { x: 120, y: 145 + aux }
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
                        absolutePosition: { x: 360, y: 145 + aux }
                    },
                    {
                        width: 40,
                        text: "ESTADO:",
                        style: "labels",
                        absolutePosition: { x: 450, y: 145 + aux }
                    },
                    {
                        width: 100,
                        text: info.estado1,
                        style: "inputs",
                        absolutePosition: { x: 500, y: 145 + aux }
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