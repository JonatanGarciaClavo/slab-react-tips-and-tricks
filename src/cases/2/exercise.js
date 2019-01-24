/**
 * Exercise 2
 *
 * What we try to accomplish in this exercise is to build 2 HOC that help us with repetitive
 * behavior of our components. We need a component that will display a list of characters and
 * a button that will handle when display or not title in our list
 *
 * 1) 🔎 Check all code provided like withTitle HOC
 * 2) 🚥 Create HOC called withToggle, this will handle an internal state with a true/false flag
 *       and will propagate this flag and a callback to be able to modify this flag
 * 3) 🚦 Create HOC called branch, this will handle conditional component to be rendered depend on
 *       condition(more details bellow)
 * 4) 🏗 Ones you have all HOCs created you have to build different component to accomplish the task
 *
 */
import React from 'react';
import { Flex, Box, Button } from 'rebass';
import List from '../../components/List';

/**
 * This function receive as a param a React component
 * Second function it is component that we use when use this HOC
 * const ExampleWhitTitle = withTitle(MyComponent);
 * <ExampleWithTitle title="Example title" {...otherProps} />
 * As you could see example, ExampmleWithTitle it is a composition of MyCompoent + withTitle
 * that means that we will render title and then inside of it MyComponent that includes all
 * props and behaviors
 *
 * @param {React.Component} Component
 */
const withTitle = Component => ({ title, ...props }) => (
  <div>
    <h3>{title}</h3>
    <Component {...props} />
  </div>
);

/**
 * With this HOC what we want to achieve it is to encapsulate a common behavior, in this case
 * it is to handle a flag bar that will mutate from true to false and vice versa using provided callback
 *
 * ❕ Just as a reminder you can't handle state management in a functional component(or at least not yet 😜)
 * ✅ Think about what it should be instead that null
 *
 * @param {React.Component} Component
 * @param {Boolean} isActive
 */
const withToggle = (Component, isActive = false) => null;

/**
 * With this HOC what we want to achieve it is given a function will return boolean that will decide
 * if we should render one component(ComponentOnPass) or another(ComponentOnFail)
 *
 * 🎖 Extra points if you make not required ComponentOnFail
 * @param {Function} test
 * @param {React.Component} ComponentOnPass
 * @param {React.Component} ComponentOnFail
 */
const branch = (test, ComponentOnPass, ComponentOnFail) => null;

// 📝 this is same as we saw in the example before
const ListWithTitle = withTitle(List);

// 👁‍🗨 what we need here to accomplish following signature:
//   <EnhancedList showTitle={isActive} title="Character list" />
// 🔎 find a way to compose multiple HOCs and components to achieve it
const EnhancedList = null;

// 🏗 find a way with all HOCs and components to modify following code
// 💪 think on how to wrap withToggle to be used inside of this component and be used by List and Button
const Exercise2 = () => (
  <Flex alignItems="center">
    <Box mx={30}>
      <ListWithTitle title="Character list" />
    </Box>
    <Box mx={30}>
      <Button>
        Not handled button{' '}
        <span role="img" aria-label="crying face">
          😢
        </span>
      </Button>
    </Box>
  </Flex>
);

export default Exercise2;
