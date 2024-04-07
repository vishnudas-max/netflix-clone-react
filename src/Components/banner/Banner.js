import React, { useEffect, useRef, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,IMAGE_URL} from '../../constands/constatn'

function Banner() {

  const [movie, setMovie] = useState()
  const banner=useRef(0)


  useEffect(()=>{
      
      banner.current = Math.floor(Math.random() * (20 - 1 + 1)) + 0;
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response)=>{
        setMovie(response.data.results[banner.current])
      })
  },
  [])

  return (
    <div className='banner overlay'
    style={{backgroundImage:`url(${movie?IMAGE_URL+movie.backdrop_path:''})`}}
    >
      <div className='contend'>
        <h1 className='title'>{movie ? movie.title:''}</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='discripiton'>{movie ? movie.overview : ''} </h1>
        </div>
      <div className='fade'></div>
    </div>
  )
}

export default Banner