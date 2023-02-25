import React, { useEffect, useState } from 'react';

interface ProductType {
  name: string;
  id: string;
  price: number;
}

export default function Products() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('Loading...');
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`../data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch(() => {
        setError('error 발생!!');
        console.error(error);
      })
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error가 발생되었습니다.</div>;

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked.toString()} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>

      <div id="content">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
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
