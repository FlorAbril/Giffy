import React from "react"
import { useGifs } from 'hooks/useGifs'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import LazyTrending from 'components/TrendingSearches/index'
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"




export default function Home() {
  const { loading, gifs, keywordToUse: lastKeyword } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <link rel='canonical' href='https://giffy-florabril.vercel.app/' />
      </Helmet>
      <SearchForm />

      {
        loading ? <Spinner /> :
          <div className="wrapper-gif">

            {!loading &&
              <ListOfGifs 
                gifs={gifs} 
                title={lastKeyword 
                  ? `Última búsqueda: ${decodeURI(lastKeyword)}` 
                  : 'Gifs populares'} 
                lastKeyword={lastKeyword} />
            }


            <LazyTrending />
          </div>
      }
    </>
  )
}

