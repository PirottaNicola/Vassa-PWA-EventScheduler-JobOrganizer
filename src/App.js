import './App.css';
import { Route, Switch } from 'react-router-dom';
//components
import Calendar from "./pages/Calendar"
function App() {
  return (
    <div className="App">
      <Switch exact>
        <Route path='/calendar'>
          <Calendar />
        </Route>
        <Route path='*'>
          errore: nessuna pagina disponibile a questo indirizzo
        </Route>
      </Switch>
    </div>
  );
}

export default App;
