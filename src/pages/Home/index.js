import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import {useGifs} from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'


const POPULAR_GIFS = ["Gatos", "Osos", "Amor", "Pandas"]

export default function Home() {
  const [keyword,setKeyword]= useState('')
  const [path,pushLocation] = useLocation()
  const {loading,gifs} = useGifs()

  const handleSubmit = event =>{
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = event =>{
    setKeyword(event.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword}/>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
    }
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}