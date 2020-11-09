import React, { forwardRef } from 'react'
import './videocard.css'
import TextTruncate from 'react-text-truncate'
import {ThumbUpSharp} from '@material-ui/icons'

const base_URL = 'https://image.tmdb.org/t/p/original/'
const VideoCard = forwardRef(({movie},ref) => {
    
    return (
        <div ref={ref} className="videoCard">
            
            <img src={`${base_URL}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <TextTruncate line={1} element='p' truncateText='...' text={movie.overview} />
            <h1>{movie.title}</h1>
            <p className="videoCard__par">
                {movie.release_date}
                <ThumbUpSharp />
                {movie.vote_count}
            </p>
            
        </div>
    )
})

export default VideoCard
