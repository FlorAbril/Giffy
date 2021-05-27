import React, { useState } from "react"
import {useLocation } from "wouter"
import {useGifs} from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'



export default function Home() {
  const [keyword,setKeyword]= useState('')
  const [, pushLocation] = useLocation()
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
    {
      loading ? <Spinner /> :
     <div className="wrapper-gif">
      {loading 
        || <ListOfGifs gifs={gifs} title="Última búsqueda" />
      }
      <TrendingSearches/>
     </div>
    }
    </>
  )
}