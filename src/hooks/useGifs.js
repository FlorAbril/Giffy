import {useContext, useEffect,useState} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0
export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const {gifs,setGifs} = useContext(GifsContext)
    const [page,setPage] = useState(INITIAL_PAGE)

    // recupero la keyword del local storage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword : keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardo la keyword en el local storage
            localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword, keywordToUse, setGifs])

    useEffect(()=>{
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
            .then(nextGifs =>{
                 setGifs(prevGifs => prevGifs.concat(nextGifs))
                 setLoadingNextPage(false)
            })
    },[keywordToUse, page,setGifs])

    return{loading,loadingNextPage,gifs,setPage}
}