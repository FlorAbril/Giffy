import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route } from "wouter"
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'

export default function App() {
  return (
    <StaticContext.Provider value={{name : 'flor abril',estado: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt='Giffy logo' src='./logo.svg' />
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
              />
              <Route
              component={Home}
              path="/Giffy"
              />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}
