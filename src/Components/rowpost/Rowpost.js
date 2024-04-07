import React, { useState } from 'react'
import './Rowpost.css'
import { useEffect, } from 'react'
import axios from '../../axios'
import {  API_KEY, IMAGE_URL} from '../../constands/constatn'
import Youtube,{} from 'react-youtube'


function Rowpost({title,isSmall,url}) {

  const [movies, setMovie] = useState([])
  const [video,setVideo] =useState('')

  useEffect(() => {
    axios.get(url)
      .then((response) => {
       
        setMovie(response.data.results)

      })
      .catch(err => {
        alert('Something went wrong !')
      })
  },
    [url])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

    const handlePlayer=(id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US'`)
      .then(response=>{
        if(response.data.results.length !== 0){
           setVideo(response.data.results[0].key)
        }else{
          alert('trailer not found !')
        }
       
      })
      .catch(err=>{
        alert('trailer not found!')
      })
      
    }
   


  return (

    
    <div className='row' >
      <h2>{title}</h2>
      <div className="posters">
        {
          movies.map((movie,index)=>{
            return(
            <img className={isSmall ? 'small-poster' :'poster'} src={`${IMAGE_URL+movie.backdrop_path}`}alt="Poster" 
            key={index} onClick={()=>handlePlayer(movie.id)}/>
      
            )
          })
        }
        </div>
         {video && <Youtube  videoId={video} opts={opts} onEnd={()=>{setVideo('')}} /> } 
    </div>

   

  
  )
}

export default Rowpost