import React, { Component } from "react";
import Header from './components/Header';
import {Container} from "./components/styles/Container.styled";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Header />
          <Container>
            {content.map((item, index)=>(
              <Card key={index} item={item}></Card>
            )
            )}
          </Container>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
