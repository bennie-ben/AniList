import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`

const Form = styled.form`

`

const Input = styled.input`

`

export function SearchList({
    endDate, 
    startDate,
    english,
    native,
    bannerImage,
    description}){

    return(
        <Container>
            <Form>
                <Input type="text" placeholder="Searching By term ..."/>
            </Form>
        </Container>
    );
}