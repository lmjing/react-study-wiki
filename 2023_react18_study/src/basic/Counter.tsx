import { useState } from 'react';

interface CounterProps {
  totalCount: number;
  onClick: () => void;
}

export default function Counter({ totalCount, onClick }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div className="number">
        {count} / {totalCount}
      </div>
      <button
        className="button"
        onClick={() => {
          onClick();
          setCount((prev) => prev + 1);
        }}
      >
        ADD +
      </button>
    </div>
  );
}
