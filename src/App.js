
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rpa from './pages/Rpa'
import Team from './pages/QuemSomos'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Rpa} />
          <Route path="/team" component={Team} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
