import React from 'react';
import { SearchList } from "Components/SearchList";

function SearchPresenter({movies}){

    const {
        title:{english, native},
        bannerImage,
        startDate,
        endDate,
        description
    } = movies.Data.media;

    return(
        <SearchList 
            endDate={endDate}
            startDate={startDate}
            english={english}
            native={native}
            bannerImage={bannerImage}
            description={description}
        />
    );
}

export default SearchPresenter;