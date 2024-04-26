import Bondi from "./Bondi.js";

export default function Fila({color,bondis}){

    const lineas = bondis.map(linea => {
        return <p>{linea}</p>
    })

    return(
        lineas
        
    )
}