import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';
import Country from './components/Country';


function App() {
  return (
    <Router>
     <Header/>
      <Route exact path="/">
        <Filter/>
        <Countries/>
      </Route>
      <Route path="/countries/:common" children={<Country/>}></Route>
    </Router>
  );
}

export default App;
