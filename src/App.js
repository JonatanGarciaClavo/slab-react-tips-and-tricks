import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { Box, Flex } from 'rebass';
import { Router, Link } from '@reach/router';

import './App.css';
import { theme, GlobalStyles } from './theme/globalStyles';
import Header from './components/Header';
import { NUM_EXERCISES } from './constants';
import configureStore from './configStore';

const files = Array(NUM_EXERCISES)
  .fill()
  .map((e, i) => i + 1);

const pages = files.reduce((p, caseNumber, index, fullArray) => {
  const previous = fullArray[index - 1];
  const next = fullArray[index + 1];
  const solution = require(`./cases/${caseNumber}/solution`);
  Object.assign(solution, {
    previous,
    next,
    isolatedPath: `/isolated/solution/${caseNumber}`,
  });
  const exercise = require(`./cases/${caseNumber}/exercise`);
  Object.assign(exercise, {
    previous,
    next,
    isolatedPath: `/isolated/exercise/${caseNumber}`,
  });
  const example = require(`./cases/${caseNumber}/example`);
  Object.assign(example, {
    previous,
    next,
    isolatedPath: `/isolated/example/${caseNumber}`,
  });
  p[caseNumber] = {
    solution,
    exercise,
    example,
    exampleTitle: example.default.title,
    title: solution.default.title,
  };
  return p;
}, {});

const filesAndTitles = files.map(caseNumber => ({
  exampleTitle: pages[caseNumber].exampleTitle,
  title: pages[caseNumber].title,
  caseNumber,
}));

class ErrorCatcher extends React.Component {
  static getDerivedStateFromProps() {
    // if the props change then let's try rendering again...
    return { error: null };
  }
  state = { error: null };
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error });
  }
  render() {
    const { error } = this.state;
    const { children, ...props } = this.props;
    return (
      <div {...props}>{error ? 'There was an error. Edit the code and try again.' : children}</div>
    );
  }
}

function ComponentContainer({ label, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center' }}>{label}</h2>
      <div
        style={{
          flex: 1,
          padding: 20,
          border: '1px solid',
          display: 'grid',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <ErrorCatcher {...props} />
      </div>
    </div>
  );
}

function NavigationFooter({ caseNumber, type }) {
  const current = pages[caseNumber];
  let suffix = '';
  let Usage = current.solution;
  if (type === 'exercise') {
    suffix = '/exercise';
    Usage = current.exercise;
  } else if (type === 'solution') {
    suffix = '/solution';
  } else if (type === 'example') {
    suffix = '/example';
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gridColumn: 'span 2',
      }}
    >
      <div style={{ flex: 1 }}>
        {Usage.previous ? (
          <Link to={`/${Usage.previous}${suffix}`}>
            {pages[Usage.previous].title}{' '}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        {Usage.next ? (
          <Link to={`/${Usage.next}${suffix}`}>
            <span role="img" aria-label="next">
              👉
            </span>{' '}
            {pages[Usage.next].title}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function ExerciseContainer({ caseNumber }) {
  const {
    exercise: { default: Exercise },
    solution: { default: Solution },
  } = pages[caseNumber];
  return (
    <div
      style={{
        padding: 20,
        height: '100%',
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '30px 1fr 30px',
      }}
    >
      <h1 style={{ gridColumn: 'span 2', textAlign: 'center' }}>{Solution.title}</h1>
      <ComponentContainer label={<Link to={`/${caseNumber}/exercise`}>Exercise</Link>}>
        <Exercise />
      </ComponentContainer>
      <ComponentContainer label={<Link to={`/${caseNumber}/solution`}>Solution</Link>}>
        <Solution />
      </ComponentContainer>
      <NavigationFooter caseNumber={caseNumber} type="page" />
    </div>
  );
}

function FullPage({ type, caseNumber }) {
  const page = pages[caseNumber];
  const { default: Usage, isolatedPath } = pages[caseNumber][type];
  return (
    <div>
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to={`/${caseNumber}`}>
          <span role="img" aria-label="back">
            👈
          </span>
          Exercise Page
        </Link>
        <Link to={isolatedPath}>isolated</Link>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>{page.title}</h1>
      </div>
      <div
        style={{
          flex: 1,
          padding: 20,
          margin: 20,
          border: '1px solid',
          display: 'grid',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <ErrorCatcher>
          <Usage />
        </ErrorCatcher>
      </div>
      <NavigationFooter caseNumber={caseNumber} type={type} />
    </div>
  );
}

function Isolated({ caseNumber, type }) {
  const Comp = pages[caseNumber][type].default;
  return (
    <div
      style={{
        padding: 30,
        height: '100vh',
      }}
    >
      <div>
        <Comp />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      {filesAndTitles.map(({ title, caseNumber, exampleTitle }) => {
        return (
          <div key={caseNumber} style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
            {caseNumber}
            {'. '}
            <div>
              <div>
                <Link to={`/${caseNumber}/example`}>{exampleTitle}</Link>{' '}
              </div>
              <div>
                <Link to={`/${caseNumber}`}>{title}</Link>{' '}
                <small>
                  <Link to={`/${caseNumber}/exercise`}>(exercise)</Link>{' '}
                  <Link to={`/${caseNumber}/solution`}>(solution)</Link>
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function NoMatch() {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. To open one of the exercises, go to <code>{`/caseNumber`}</code>, for
        example:{' '}
        <Link to="/01">
          <code>{`/01`}</code>
        </Link>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalStyles />
            <Flex flexDirection="column" mx="auto" width={1}>
              <Header />
              <Box width={1} my={20}>
                <Router>
                  <Home path="/" />
                  <ExerciseContainer path="/:caseNumber" />
                  <FullPage path="/:caseNumber/example" type="example" />
                  <FullPage path="/:caseNumber/exercise" type="exercise" />
                  <FullPage path="/:caseNumber/solution" type="solution" />
                  <Isolated path="/isolated/exercise/:caseNumber" type="exercise" />
                  <Isolated path="/isolated/solution/:caseNumber" type="solution" />
                  <Isolated path="/isolated/example/:caseNumber" type="example" />
                  <NoMatch default />
                </Router>
              </Box>
            </Flex>
          </Suspense>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
