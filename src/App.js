import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//components
import Calendar from "./pages/Calendar"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch exact>
          <Route path='/calendar'>
            <Calendar />
          </Route>
          <Route path='*'>
            <h1> errore: nessuna pagina disponibile a questo indirizzo</h1>
            <Link to='/calendar'>Torna all'app</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
