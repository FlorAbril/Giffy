import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function SearchResults ({ params }) {
  const { keyword, rating,lang} = params
  const {loading,gifs,setPage} = useGifs({keyword,rating,lang})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null: externalRef,
    once: false
  })
  const title = gifs ? `Gifs de ${decodeURI(keyword)} | Giffy` : ''
  
 
  const debounceHandleNextpage = useCallback(
   debounce(()=> setPage(prevPage => prevPage +1), 100)
   ,[setPage])

  useEffect(function(){
    if(isNearScreen) debounceHandleNextpage()
  },[isNearScreen, debounceHandleNextpage])


  return <>
     <SearchForm initialKeyword={keyword} initialRating={rating} initialLang={lang}/>
    {loading
      ? <Spinner />
      : <> 
          <Helmet>
            <title>{title}</title>
            <meta name='description' content={title}></meta>
          </Helmet>
          <ListOfGifs gifs={gifs} title={`Gifs de: ${decodeURI(keyword)}`}/>
          <div id="visor" ref={externalRef} ></div>
        </>
    }
  </>
}