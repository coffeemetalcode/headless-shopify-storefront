import React, { useContext, useEffect } from 'react';

import { ShopContext } from '../context/shopContext';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {
        products.map((product) => (
          <h1>{ product.title }</h1>
        ))
      }
    </div>
  )
}

export default Home;