import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl , API_KEY } from '../../constants/Constants'
import YouTube from 'react-youtube' 
function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((responce)=>{
            setmovies(responce.data.results)
        }).catch((err)=>{
            alert('Networ Error')
        })
    }, [props.url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovieTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          } else {
            alert("Trailer Not available");
          }
        });
      };
      
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
             movies.map((data)=>
                    <img onClick={()=>
                        handleMovieTrailer(data.id)
                    } key={data.id} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+data.backdrop_path}`} alt="" />  
                )
            }
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost