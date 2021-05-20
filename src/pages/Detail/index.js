import React, {useContext} from 'react'
import Context from '../../context/StaticContext'

export default function Detail ({ params }) {
  const context = useContext(Context)
  console.log(context)
  return <h1>GIF con id {params.id}</h1>
}