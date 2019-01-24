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
 * HOC that given an component will add a title in top of it
 * @param {React.Component} Component
 */
const withTitle = Component => ({ title, ...props }) => (
  <div>
    <h3>{title}</h3>
    <Component {...props} />
  </div>
);

/**
 * HOC that given a component will provide a boolean flag and a callback to switch the value
 * of that flag
 * @param {React.Component} Component
 * @param {Boolean} isActive
 */
const withToggle = (Component, isActive = false) =>
  class WithToggle extends React.Component {
    state = {
      isActive,
    };
    toggle = () => {
      this.setState(prevState => ({
        isActive: !prevState.isActive,
      }));
    };
    render() {
      return <Component {...this.props} toggle={this.toggle} isActive={this.state.isActive} />;
    }
  };

/**
 * HOC that given a test function will decide which component render
 * @param {Function} test
 * @param {React.Component} ComponentOnPass
 * @param {React.Component} ComponentOnFail
 */
const branch = (test, ComponentOnPass, ComponentOnFail) => props =>
  test(props) ? (
    <ComponentOnPass {...props} />
  ) : ComponentOnFail ? (
    <ComponentOnFail {...props} />
  ) : null;

// Enhanced List component with title
const ListWithTitle = withTitle(List);
// Enhanced list component that will decide depend on showTitle prop if render ListWithTitle or List
const EnhancedList = branch(props => props.showTitle, ListWithTitle, List);

/**
 * Component that will deal with a button that will change status of list to display or not title
 * @param {Object} props
 */
const Exercise2 = ({ toggle, isActive }) => (
  <Flex alignItems="center">
    <Box mx={30}>
      <EnhancedList showTitle={isActive} title="Character list" />
    </Box>
    <Box mx={30}>
      <Button onClick={toggle}>{isActive ? 'Hide list title' : 'Show list title'}</Button>
    </Box>
  </Flex>
);

const Enhanced = withToggle(Exercise2, true);
Enhanced.title = 'Play with HoCs';

export default Enhanced;
