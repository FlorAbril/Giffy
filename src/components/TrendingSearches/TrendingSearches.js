import React, { useEffect, useState } from 'react';
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'components/Category';
import Spinner from 'components/Spinner';



export default function TrendingSearches(){
    const [trends, setTrends] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(function (){
        setLoading(true)
        getTrendingTerms().then(setTrends)
        setLoading(false)
    },[])

return <>{ loading ? <Spinner/> : <Category name='Tendencias' options={trends}/>} </>
}
