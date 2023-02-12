import { useState } from 'react';
import Counter from './Counter';

interface AppCounterProps {}

export default function AppCounter({}: AppCounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count < 10 ? '❄️' : '🔥'}
      </div>
      <div className="counters">
        <Counter totalCount={count} onClick={() => setCount((prev) => prev + 1)} />
        <Counter totalCount={count} onClick={() => setCount((prev) => prev + 1)} />
      </div>
    </div>
  );
}
