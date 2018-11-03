import React, { Component, Suspense } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Box, Card, Flex } from 'rebass';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { theme, GlobalStyles } from './theme/globalStyles';
import Header from './components/Header';
const Home = React.lazy(() => import('./components/Home'));
const Example1 = React.lazy(() => import('./examples/1'));
const Exercise1 = React.lazy(() => import('./exercises/1'));
const Solution1 = React.lazy(() => import('./solutions/1'));

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalStyles />
            <Flex mx="auto" my={50} width={[1, 3 / 4]}>
              <Card width={1} boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)" borderRadius={8}>
                <Header />
                <Box width={1} my={20}>
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/example/1" render={() => <Example1 />} />
                  <Route path="/exercise/1" render={() => <Exercise1 />} />
                  <Route path="/solution/1" render={() => <Solution1 />} />
                </Box>
              </Card>
            </Flex>
          </Suspense>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
