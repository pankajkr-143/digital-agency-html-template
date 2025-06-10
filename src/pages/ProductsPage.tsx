import React, { useLayoutEffect } from 'react';
import Products from '../components/Products';

const ProductsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Products />
    </div>
  );
};

export default ProductsPage;