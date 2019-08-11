import React from 'react';
import { BrowserRouter, 
         Route, 
         Redirect, 
         Switch } from 'react-router-dom';
import Header from "Components/Header";
import Popular from "Routes/Popular";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import Trending from "Routes/Trending";

export default () =>(
    <BrowserRouter>
        <> 
        <Header/>
        <Switch>
            <Route path='/' exact component= {Popular}/>
            <Route path='/movies/:id' exact component= {Detail}/>
            <Route path='/tv/:id' exact component= {Detail}/>
            <Route path='/search' exact component= {Search}/>
            <Route path='/tv' exact component= {Trending}/>
            <Redirect from ="*" to="/"/>
        </Switch>
        </>
    </BrowserRouter>
);