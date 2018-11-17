import React, { Component, Suspense } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Box, Card, Flex } from 'rebass';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { theme, GlobalStyles } from './theme/globalStyles';
import Header from './components/Header';
import { NUM_EXERCISES } from './constans';

const Home = React.lazy(() => import('./components/Home'));

function getExerciseComponents() {
  const components = {};
  for (let index = 1; index <= NUM_EXERCISES; index++) {
    components[index] = {
      example: React.lazy(() => import(`./cases/${index}/example`)),
      exercise: React.lazy(() => import(`./cases/${index}/exercise`)),
      solution: React.lazy(() => import(`./cases/${index}/solution`)),
    };
  }
  return components;
}

function getExerciseRoutes() {
  const exerciseComponents = getExerciseComponents();
  const routes = [];
  for (let index = 1; index <= NUM_EXERCISES; index++) {
    const Example = exerciseComponents[index].example;
    routes.push(
      <Route key={`/example/${index}`} path={`/example/${index}`} render={() => <Example />} />,
    );
    const Exercise = exerciseComponents[index].exercise;
    routes.push(
      <Route key={`/exercise/${index}`} path={`/exercise/${index}`} render={() => <Exercise />} />,
    );
    const Solution = exerciseComponents[index].solution;
    routes.push(
      <Route key={`/solution/${index}`} path={`/solution/${index}`} render={() => <Solution />} />,
    );
  }
  return routes;
}

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
                  {getExerciseRoutes()}
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
