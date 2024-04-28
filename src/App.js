import { Button } from 'bootstrap';
import './App.css';
import Cartel from './Cartel';
import { useState } from 'react';

function App() {
  const [visible,setVisible] = useState(false);

  const invertirVerticalidad = () =>{
    setVisible(!visible)
  }

  return (<>

    <button style={{marginTop:'2em',marginLeft:'2em'}} onClick={invertirVerticalidad}>Invertir verticalidad</button>
     
     {visible ? <Cartel /> :  <Cartel invertido={1} />}     
     
    </>
  );
}

export default App;
