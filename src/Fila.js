import Bondi from "./Bondi.js";

export default function Fila({color,bondis}){
    console.log({bondis})

    const descripcionLineas = bondis.map((element,index) => {
        return element[1].map(descripcion => {
            return <div>{descripcion}</div>
        })
    })

    const lineas = bondis.map(linea => {
        return <div className="col-4">
                <div className="numeroLinea w-75 text-center">
                    {linea[0]}
                </div>
                <div className="descripcionLineas mt-1 mb-1">
                    {descripcionLineas}
                </div>
            </div>
    })

    return(<>
        <div className="row" style={{borderRight: `${color} 2em solid`}}>
        {lineas}
        </div>
        </>
        
    )
}