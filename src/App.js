import { Switch } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Navigation</h1>
        <Switch>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/products/:handle' element={ <ProductPage /> }/>
          </Routes>
        </Switch>
        <h1>Footer</h1>
      </Router>
    </div>
  );
}

export default App;
