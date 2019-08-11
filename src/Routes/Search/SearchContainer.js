import React from "react";
import SearchPresenter from "./SearchPresenter";
import {SearchList} from "Components/SearchList";
import { Query,withApollo } from 'react-apollo';
import { Media_Search } from "../../queries";


const SearchContainer = ({title}) =>
    <Query query={Media_Search} variables={{title}}>
    {
        ({loading, error ,data}) => {
            if(loading) return <span>LOADING</span>;
            if(error) return <SearchList/>;
            if(data) return <SearchPresenter movies={data}/>
            }
        }
    
    </Query>

export default withApollo(SearchContainer);