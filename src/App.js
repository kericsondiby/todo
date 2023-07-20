import './App.css';
import { Clock } from './Clock';
import { Compo } from './CompoRef';
import { Apps, Compteur } from './Compteur';
import { Calculator } from './composants/Converter';
import { Home } from './composants/Input';


function App() {
  return (
    <div className="App">
      {/* <Clock />
      
      <Compo /> */}
      {/* <Apps /> */}
      <Home />

      <Calculator />
    </div>
  );
}

export default App;
