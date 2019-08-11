import React from "react";
import TrendingPresenter from "./TrendingPresenter";
import { Query } from 'react-apollo';
import { Movie_Trending } from "../../queries";

const TrendingContainer = () =>
    <Query query={Movie_Trending}>
    {
        ({loading, error ,data}) =>{
            if(loading) return <span>LOADING</span>
            if(error) return <span>ERROR</span>
            if(data) {
                const {Page:{media}}=data;
                return <TrendingPresenter movies={media}/>
            }
        }
    }
    </Query>

export default TrendingContainer;

