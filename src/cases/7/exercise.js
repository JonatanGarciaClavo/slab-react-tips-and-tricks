/**
 * 👷‍ Refactor this class component to be function component with hooks
 * ℹ️ Check all info about hooks https://reactjs.org/docs/hooks-intro.html
 * 📝 Think in the easier solution don't over complicate it 😉
 */
import React, { Component } from 'react';
// 📝 import React, { useState, useEffect, useCallback } from 'react';
import Battery from '../../components/Battery';

class Exercise extends Component {
  constructor(...args) {
    super(...args);
    this.state = { level: 0, charging: false };
  }
  componentDidMount() {
    navigator.getBattery().then(bat => {
      this.battery = bat;
      this.battery.addEventListener('levelchange', this.handleChange);
      this.battery.addEventListener('chargingchange', this.handleChange);
      this.handleChange({ target: this.battery });
    });
  }
  componentWillUnmount() {
    this.battery.removeEventListener('levelchange', this.handleChange);
    this.battery.removeEventListener('chargingchange', this.handleChange);
  }
  handleChange = ({ target: { level, charging } }) => {
    this.setState({ level, charging });
  };
  render() {
    return (
      <section>
        <Battery {...this.state} />
      </section>
    );
  }
}

export default Exercise;
