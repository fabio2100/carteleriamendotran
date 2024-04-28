import { InfoOutlined } from "@mui/icons-material"
import { DirectionsBus } from "@mui/icons-material"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Fila from "./Fila"

export default function Cartel({invertido}){
    return(
        <div className={invertido ? 'container mainInvertido' : 'container main'}>
            <div className='row superior'>
                <div className="container">
                    <div className="row">
                        <div className="col logoSuperior">
                            <div className="container">
                                <p className="text-center pt-1 mb-1 svg_icons"><AcUnitIcon /></p>
                                <div className="text-center">MENDOTRAN</div>
                            </div>
                        </div>
                        <div className="col logoSuperior nroParada mt-2"><DirectionsBus className="svg_icons"/> M5282 </div>
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
                <div className="containerRows container">
                <Fila color={'#b6a50f'} invertido={invertido} bondis={[[400,['TRAPICHE','DORREGO','lugar1','lugar2','lugar3']]]}/>
                <Fila color={'#0c0e86'} invertido={invertido} bondis={[[720,['LUJAN','CENTRO','Palmares','Casa de Gobierno','Panamericana']],[750,['LUJAN','MAIPU','Chacras de coria','San Martín']]]}/> 
                <Fila color={'#0c0e86'} invertido={invertido} bondis={[[720,['LUJAN','CENTRO','Palmares','Casa de Gobierno','Panamericana']],[750,['LUJAN','MAIPU','Chacras de coria','San Martín']]]}/>          
                </div>
                </div>
    </div>
    )
}