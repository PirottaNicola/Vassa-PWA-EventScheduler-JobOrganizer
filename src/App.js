import { Route, Switch, Link } from 'react-router-dom';
//components
import Calendar from "./pages/Calendar"
import Prova from "./pages/Prova"
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Calendar />
        </Route>
        <Route path='/prova'>
          <Prova />
        </Route>
        <Route path='*'>
          <h1> errore: nessuna pagina disponibile a questo indirizzo</h1>
          <Link to='/'>Torna all'app</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
