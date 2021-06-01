import React, { useState} from 'react';

function SearchForm({onSubmit}) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (event, keyword) =>{
        event.preventDefault()
        onSubmit(keyword)
      }
    const handleChange = event =>{
        setKeyword(event.target.value)
      }

    return <form onSubmit={(e) => handleSubmit(e, keyword)}>
        <button className='search-button'>Buscar</button>
        <input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword} />
    </form>
}

export default React.memo(SearchForm)