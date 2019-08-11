import React, { Component } from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/GlobalStyles';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
  grid-gap:20px;
`

class App extends Component{
  render(){
    return (
      <Grid className="App">
        <>
          <GlobalStyles/>
          <Router/>
        </>
      </Grid>
    );
}
}
export default App;
