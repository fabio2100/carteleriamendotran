import { InfoOutlined } from "@mui/icons-material"
import { DirectionsBus } from "@mui/icons-material"
import Fila from "./Fila"

export default function Cartel(){
    return(
        <div className='container main'>
            <div className='row superior'>
                <div className="container">
                    <div className="row">
                        <div className="col logoSuperior">
                            <div className="container">
                                <div className="row">LOGO</div>
                                <div className="row">MENDOTRAN</div>
                            </div>
                        </div>
                        <div className="col logoSuperior"><DirectionsBus /> numeroparada</div>
                    </div>
                </div>
            </div>
            <div className='row medio'>
              <div className="container">
                    <div className="row mainMiddle">
                        <div className="col">
                            <p className='text-center logoMedio'>
                                <InfoOutlined />
                                </p>
                        </div>
                        <div className="col textoMedio">
                            <div className="row"><p className="text-center mb-0">148 Opción 7</p></div>
                            <div className="row"><p className="text-center mb-0">https://mendotran.mendoza.gov.ar/</p></div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='row'>
                <Fila />
                <Fila />
                </div>
    </div>
    )
}