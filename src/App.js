import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import reducer from "./Store/Reducer/User";
import {createStore} from 'redux';  
import  styles from './App.module.css';
import Home from "./Pages/Home/Home";

const App = () => {
  const store= createStore(reducer)
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
