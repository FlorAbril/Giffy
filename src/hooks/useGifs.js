import {useContext, useEffect,useState} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const {gifs,setGifs} = useContext(GifsContext)
    // const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        // recupero la keyword del local storage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')
        getGifs({ keyword : keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardo la keyword en el local storage
            localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword,setGifs])

    return{loading,gifs}
}