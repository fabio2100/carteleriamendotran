import Bondi from "./Bondi.js";

export default function Fila({color,bondis}){

    const lineas = bondis.map(linea => {
        return <div className="col-4">{linea}</div>
    })

    return(<>
        {lineas}
        </>
        
    )
}