import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
    display:grid;
    grid-template-columns:1fr 2fr;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    border-bottom:0.7px #042f4b solid;
    background-color:#f9f6f2;
    
`

const List = styled.ul`
    display:grid;
    color:#042f4b;
    place-items: center center;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-flow:columns;

`
const Item = styled.li`
    font-size:15px;
    padding-bottom:4.3px;
    border-bottom: solid 2.2px ${props=> props.current ? "#464159":"transparent" };
    transition:border-bottom.4s ease-in-out;
`
const SLink = styled(Link)``;

export default withRouter(({ location:{ pathname } })=>(
<Header>
    <List>
        <Item current={pathname === "/"}><SLink to="/">POPULAR</SLink></Item>
        <Item current={pathname === "/search"}><SLink to="/search">SEARCH</SLink></Item>
        <Item current={pathname === "/tv"}><SLink to="/tv">TRENDING</SLink></Item>
    </List>
</Header>
));