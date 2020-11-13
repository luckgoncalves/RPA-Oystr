
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rpa from './pages/Rpa'
import Team from './pages/QuemSomos'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
              <Route path="/" exact component={Rpa} />
              <Route path="/team" component={Team} />
            </Switch>
            <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
