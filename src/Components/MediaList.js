import React from 'react';
import styled from 'styled-components';

const Div = styled.div`


`
const Card = styled.div`
    align-items: center;
    display:grid;
    grid-auto-flow:row;
    grid-template-columns: 1fr 3fr;
    font-weight:200;


`
const Info = styled.div`
`

const Span = styled.span`
    width:100%;
    height:100%;
    padding:5%;
    }

`

const Photo = styled.img`
    border-radius:4px;
    height:250px;
    width:180px;
    opacity: 0.8;
    cursor:pointer;
    &:hover{
        opacity: 1.0;
        transition: opacity .55s ease-in-out;

`

const Block = styled.ul`


`

const List = styled.li`
    &:first-child{
        font-size:20px;
        
    }
    padding:10px;

`

export function MovieList({movie}){
    const genre = () => {
        const a = movie.genres.join(", ")
        return <p>{a}</p>
    }

    return(
        <Div>
            <Card>
                <Span>
                    <Photo src={movie.coverImage.large} alt="Sorry"></Photo>
                </Span>
                <Info>
                    <Block>
                        <List>{movie.title.english}</List>
                        <List>{movie.title.native}</List>
                        <List>{genre()}</List>
                        <List>POPULARITY : {movie.popularity}</List>
                        <List>TRENDING : {movie.trending}</List>
                        <List>AVERAGE SCORE : {movie.averageScore}</List>
                    </Block>
                </Info>
            </Card>
        </Div>
        )
}