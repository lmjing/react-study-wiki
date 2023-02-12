import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = (event: React.MouseEvent) => {
    setX(event.clientX - 15);
    setY(event.clientY - 15);
    console.log(x, y);
  };

  return (
    <div className="container" onPointerMove={setPosition}>
      <div className="pointer" style={{ transform: `translate(${x}px, ${y}px)` }} />
    </div>
  );
}
