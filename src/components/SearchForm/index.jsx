import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook'
import './index.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGUAGES = {en:'english',es:'español',pt:'português'}

const defaultLang = Object.keys(LANGUAGES)[0]
const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}


function SearchForm({initialKeyword='',initialRating='g',initialLang=defaultLang}) {
  const {keyword,rating,lang,updateKeyword,updateRating,updateLang} = useForm({initialKeyword,initialRating,initialLang})
  const [, pushLocation] = useLocation()
  
  const handleChange = event => {
    updateKeyword(event.target.value)  
  }

  const handleSubmit = (event, keyword) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}/${lang}`)
  }
  
  const handleChangeRating = (event) =>{
    updateRating(event.target.value)

  }
  const handleChangeLang = (event) =>{
    let value = event.target.value
    let key = getKeyByValue(LANGUAGES,value)
    console.log(key)
    updateLang(key)

  }

  return (
    <div className='form-wrap'>

      <form className='search-form' onSubmit={(e) => handleSubmit(e, keyword)}>
        <div className='input-wrap'>
          <input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword} />
          <button className='search-button'>Buscar</button>
        </div>
        <div className="filters-wrap">
          <select className='filter' onChange={handleChangeRating} value={rating}>
            <option disabled>Rating type</option>
            {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
          </select>
          <select className='filter' onChange={handleChangeLang} value={LANGUAGES.lang}>
            <option disabled>Language</option>
            <option>{LANGUAGES.en}</option>
            <option>{LANGUAGES.es}</option>
            <option>{LANGUAGES.pt}</option>
          </select>
        </div>

      </form>

    </div>
  )
}

export default React.memo(SearchForm)