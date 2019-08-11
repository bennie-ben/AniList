import React from "react";
import PopularPresenter from "./PopularPresenter";
import { Query } from 'react-apollo';
import { Movie_Popular } from "../../queries";


const PopularContainer = () =>
    <Query query={Movie_Popular}>
    {
        ({loading, error ,data}) =>{
            if(loading) return <span>LOADING</span>
            if(error) return <span>ERROR</span>
            if(data) {
                const {Page:{media}}=data;
                return <PopularPresenter movies={media}/>
            }
        }
    }
    </Query>

export default PopularContainer;

