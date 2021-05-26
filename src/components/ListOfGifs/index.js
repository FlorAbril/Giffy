import React from 'react'
import Gif from 'components/Gif'
import './styles.css'

export default function ListOfGifs ({gifs,title}) {
  return <div>
    <h3>{title}</h3>
    <div className='ListOfGifs'>
      {
        gifs.map(({id, title, url}) =>
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />
        )
      }
    </div>
  
    </div>
}