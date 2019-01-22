/**
 * 👷‍ Refactor this class component to be function component with hooks
 * ℹ️ Check all info about hooks https://reactjs.org/docs/hooks-intro.html
 * 📝 Think in the easier solution don't over complicate it 😉
 */
import React, { useState, useEffect, useCallback } from 'react';
import Battery from '../../components/Battery';

function Solution() {
  // 📝 useState to store our battery status
  const [battery, setBattery] = useState({ level: 0, charging: false });
  // 📝 remember to useCallback to memonize your functions
  const handleChange = useCallback(({ target: { level, charging } }) =>
    setBattery({ level, charging }),
  );
  // 📝 handle in useEffect all listeners and modify our state when it is needed
  useEffect(() => {
    let battery;
    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('chargingchange', handleChange);
      handleChange({ target: battery });
    });
    return () => {
      battery.removeEventListener('levelchange', handleChange);
      battery.removeEventListener('chargingchange', handleChange);
    };
    // 🚨 tricky part if we don't put [] as second parameter we will get called to this each time it renders 😱
  }, []);

  return (
    <section>
      <Battery {...battery} />
    </section>
  );
}

Solution.title = 'Battery';

export default Solution;
