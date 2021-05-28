import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const {loading,gifs,setPage} = useGifs({keyword})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null: externalRef,
    once: false
  })
 
  const debounceHandleNextpage = useCallback(
   debounce(()=> setPage(prevPage => prevPage +1), 100)
   ,[setPage])

  useEffect(function(){
    if(isNearScreen) debounceHandleNextpage()
  },[isNearScreen, debounceHandleNextpage])


  return <>
    {loading
      ? <Spinner />
      : <> <ListOfGifs gifs={gifs} title={decodeURI(keyword)} />
        <div id="visor" ref={externalRef} ></div></>
    }
  </>
}