import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const [searchQuery, setSearchQuery] = useState('');

  const products = location.state?.products || [];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openBottomSheet = (product) => {
    setSelectedProduct(product);
    setIsVisible(true);
  };

  const closeBottomSheet = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center">
        <FaArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        <h2 className="text-[24px] pl-5 font-semibold">{decodedCategoryName}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg p-2 cursor-pointer"
              onClick={() => openBottomSheet(product)}
            >
              <img src={product.image} alt={product.title} className="h-40 w-full rounded-md object-cover" />
              <h3 className="mt-2 text-sm">{product.title}</h3>
              <p className="text-gray-500 font-medium">{product.price} AZN</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      {selectedProduct && (
        <div className={`fixed inset-x-0 bottom-0 z-50 transform rounded-t-lg bg-white p-4 shadow-lg transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        >
          <div className="mb-4 flex items-center justify-end">
            <button onClick={closeBottomSheet} className="text-gray-500">
              ✕
            </button>
          </div>
          <div className="flex-1 px-4">
            <img src={selectedProduct.image} alt={selectedProduct.title} className="mb-4 w-full rounded-lg object-cover" />
            <h3 className="text-lg font-medium">{selectedProduct.title}</h3>
            <p className="mb-2 mt-2 text-sm font-medium text-[#777777]">{selectedProduct.price} AZN</p>
            <p className="text-sm text-[#777777]">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
