import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({initialKeyword='',initialRating='g'}) {
  const {keyword,rating,updateKeyword,updateRating} = useForm({initialKeyword,initialRating})
  const [, pushLocation] = useLocation()
 
  const handleChange = event => {
    updateKeyword(event.target.value)  
  }

  const handleSubmit = (event, keyword) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }
  
  const handleChangeRating = (event) =>{
    updateRating(event.target.value)

  }

  return (
    <form className='search-form' onSubmit={(e) => handleSubmit(e, keyword)}>
      <input className='input-form' placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword} />
      <button className='search-button'>Buscar</button>
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>
    </form>
  )
}

export default React.memo(SearchForm)