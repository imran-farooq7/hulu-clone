import React from 'react'
import './nav.css'
import requests from './requests'

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
<h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>Trending</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchPopular)}>Action</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchLatest)}>Comedy</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>Horror</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>Romance</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchPopular)}>Mystery</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchLatest)}>Sci-fi</h2>
<h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>Western</h2>
        </div>
    )
}

export default Nav
