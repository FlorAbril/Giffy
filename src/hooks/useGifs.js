import {useEffect,useState} from 'react'
import getGifs from '../services/getGifs'

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        // recupero la keyword del local storage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')
        getGifs({ keyword : keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardo la keyword en el local storage
            localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return{loading,gifs}
}