import React from 'react';

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
      this.setState({
        isActive: !this.state.isActive,
      });
    };
    render() {
      return <Component {...this.props} toggle={this.toggle} isActive={this.state.isActive} />;
    }
  };

export default withToggle;
