import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Link, Route } from "wouter"
import Context from './context/StaticContext'

export default function App() {
  return (
    <Context.Provider value={{name : 'flor abril',estado: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt='Giffy logo' src='./logo.png' />
          </Link>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"  />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </section>
      </div>
    </Context.Provider>
  )
}
