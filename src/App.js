import './App.css';
import Cartel from './Cartel';

function App() {
  return (<>
  <div className="container">
    <div className="row">
      <div className='col-12 col-lg-6'>
      <Cartel />
      </div>
      <div className='col-12 col-lg-6'>
      <Cartel invertido={1} />
      </div>
    </div>
    </div>

    </>
  );
}

export default App;
