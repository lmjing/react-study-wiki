import { useState } from 'react';
import { useQueryClient } from 'react-query';
import Products from './components/Products';

export default function AppProducts() {
  const queryClient = useQueryClient();
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <Products />
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
      <button onClick={() => queryClient.invalidateQueries(['products'])}>갱신</button>
    </div>
  );
}
