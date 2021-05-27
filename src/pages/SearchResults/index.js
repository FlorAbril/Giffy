import React from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const {loading,gifs,setPage} = useGifs({keyword})

  const handleNextPage = () => setPage(prevPage => prevPage + 1)
  return <>
    {loading
      ? <Spinner />
      :<ListOfGifs gifs={gifs} title={decodeURI(keyword)} />
    }
    <button onClick={handleNextPage} style={{width :'fit-content',fontSize: '20px',marginTop:'1em'}} >Get next page</button>
  </>
}