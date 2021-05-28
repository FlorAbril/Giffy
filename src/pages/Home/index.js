import React, { useState } from "react"
import {useLocation } from "wouter"
import {useGifs} from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import LazyTrending from 'components/TrendingSearches/index'



export default function Home() {
  const [keyword,setKeyword]= useState('')
  const [, pushLocation] = useLocation()
  const {loading,gifs,keywordToUse: lastKeyword} = useGifs()

  const handleSubmit = (event, keyword) =>{
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = event =>{
    setKeyword(event.target.value)
  }
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e,keyword)}>
        <input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword}/>
      </form>
    {
      loading ? <Spinner /> :
     <div className="wrapper-gif">
      {loading 
        ||  <ListOfGifs gifs={gifs} title={`Última búsqueda: ${decodeURI(lastKeyword)}`} lastKeyword={lastKeyword} handleSubmit={handleSubmit}/> 
      }
      <LazyTrending/>
     </div>
    }
    </>
  )
}
// // 
// {/* <button onClick={(e)=>handleSubmit(e, lastKeyword)}>Ver más gifs</button> */}
// // 