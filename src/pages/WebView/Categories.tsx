import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Retrieve products from state (passed from FirstPage.js)
  const products = location.state?.products || [];

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', marginLeft: '10px' }}
        />
        <h2 className="text-[24px] pl-5 font-semibold">{decodedCategoryName}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="rounded-lg p-2">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full rounded-md object-cover"
              />
              <h3 className="mt-2 text-sm">{product.title}</h3>
              <p className="text-gray-500 font-medium">{product.price} AZN</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
