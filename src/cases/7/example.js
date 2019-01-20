import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'rebass';

function Counter() {
  const [count, setCount] = useState(() => Number(window.localStorage.getItem('count') || 0));
  const incrementCount = useCallback(() => setCount(count + 1));
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  return <Button onClick={incrementCount}>{count}</Button>;
}

Counter.title = 'Counter';

export default Counter;
