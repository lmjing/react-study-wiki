import { useState } from 'react';
import { useQuery } from 'react-query';

interface ProductType {
  name: string;
  id: string;
  price: number;
}

export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery<Array<ProductType>>(['products', { checked }], async () => {
    console.log('fetching...');
    return fetch(`data/${checked ? 'sale_' : ''}products.json`).then((res) => res.json());
  });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error가 발생되었습니다.</div>;

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked.toString()} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>

      <div id="content">
        <ul>
          {products?.map((product, i) => (
            <li key={i}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
