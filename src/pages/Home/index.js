import React, { useCallback} from "react"
import {useLocation } from "wouter"
import {useGifs} from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import LazyTrending from 'components/TrendingSearches/index'
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"



export default function Home() {
  const [, pushLocation] = useLocation()
  const {loading,gifs,keywordToUse: lastKeyword} = useGifs()
  

  const handleSubmit = useCallback((keyword) =>{
    pushLocation(`/search/${keyword}`)
  },[pushLocation])
  
  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
     <SearchForm onSubmit={handleSubmit}/>
     
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

