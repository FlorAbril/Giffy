import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route } from "wouter"
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import LogoImage from './logo.svg'

export default function App() {
  return (
    <StaticContext.Provider value={{name : 'flor abril',estado: true}}>
      <div className="App">
        <section className="App-content">
          <div className="App-logo">
            <Link to="/" >
              <img src={LogoImage} alt="Giffy" className="App-logo"/>
          </Link>
          </div>
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
