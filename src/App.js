import React from 'react';
import './App.css';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
import WordSearch from './components/WordSearch';
import FavoriteWord from './components/FavoriteWord';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='container'>
        <div className= 'nav-bar'>
          <h1 className='header'>DICTIONARY</h1>
          <nav>
            <Link className = 'link' to ='/'>Home</Link>
            <Link className='link' to = '/favorite-word'>Favorites</Link>
          </nav>
        </div>

        <Switch>

          <Route path = '/favorite-word'>
            <FavoriteWord />
          </Route>

          <Route exact path = '/'>
            <WordSearch />
          </Route>

        </Switch>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
