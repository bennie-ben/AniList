import React from 'react';
import { MovieList } from "Components/MediaList";


function PopularPresenter({movies}){
    const result = movies.map(movie=>{
        return <MovieList movie={movie}/>
    })
    return result;
}

export default PopularPresenter;