import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import recommend from '../../images/icon/recommend.png';
import 'swiper/css';
import { useNavigate, useParams } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [productView, setProductView] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [discountResponse, setDiscountResponse] = useState(null);

  console.log('Query ID:', id);

  useEffect(() => {
    const fetchProductView = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.buylink.info/api/partner/${id}`,
          {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept-Language': 'az', // Set Azerbaijani language
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product view');
        }
        const data = await response.json();
        console.log(data);
        setProductView(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProductView();
    }
  }, [id]);

  const handleDiscountClick = async () => {
    try {
      const response = await fetch(
        `https://api.buylink.info/api/add-basket/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'az', // Set Azerbaijani language
          },
          credentials: 'include',
          body: JSON.stringify({
            productId: id,
            discount: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to apply discount');
      }

      const data = await response.json();
      console.log('Discount applied successfully:', data);
      setDiscountResponse(data);

      localStorage.setItem('uuid', data.uuid);

      navigate(`/partner/qr/${id}`);
    } catch (err) {
      console.error('Error applying discount:', err.message);
      alert('Failed to apply discount.');
    }
  };


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
    <div className="min-h-screen overflow-hidden bg-[#F2F3F5] p-4 font-poppins">
      {isVisible && (
        <div
          className="fixed inset-0 z-40 bg-[#8080808c] bg-opacity-50 transition-opacity"
          onClick={closeBottomSheet}
        />
      )}
      <div className="mb-4 flex items-center gap-3">
        <div>
          <img
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white"
            src={productView?.data?.cover}
            alt={productView?.data?.title}
          />
        </div>
        <div>
          <h2 className="text-[24px] font-semibold">
            {productView?.data?.title}
          </h2>
          <div className="flex items-center gap-1">
            <img src={recommend} alt="Recommendations" />
            <p className="text-xs text-[#777777]">
              {productView?.data?.recommendations_count} tövsiyə
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm leading-6">
        {productView?.data?.description}
      </p>

      {/* Products Section */}
      {productView?.data?.catalogue?.map((catalogue, index) => (
        <div key={index} className="mb-6">
          <h3 className="mb-3 text-[21px] font-medium leading-7">
            {catalogue.name || 'Default Catalogue Name'}
          </h3>
          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            className="overflow-visible"
          >
            {catalogue.products?.map((product) => (
              <SwiperSlide key={product.id} className="bg-swiper-qr !w-[132px]">
                <ProductCard
                  title={product.title || 'Başlıq yoxdur'}
                  price={`${product.price || 0} AZN`}
                  image={product.image || 'default-image-url'}
                  onClick={() => openBottomSheet(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}

      <div className="flex gap-4">
        <a
          href="https://app.buylink.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-blue-500 py-3 text-center font-medium text-blue-500"
        >
          Tövsiyə et
        </a>
        <button
          onClick={handleDiscountClick}
          className="flex-1 rounded-lg bg-blue-500 py-3 font-medium text-white"
        >
           {productView?.data?.user_discount}% endirim əldə et
        </button>
      </div>

      {/* Bottom Sheet */}
      {selectedProduct && (
        <div
          className={`fixed inset-x-0 bottom-0 z-50 transform rounded-t-lg bg-white p-4 shadow-lg transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="mb-2 mt-2 text-[21px] font-medium">
              {selectedProduct.title}
            </h2>
            <button onClick={closeBottomSheet} className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="mb-4 h-70 w-full rounded-lg object-cover"
            />
            <h3 className="text-lg font-medium">{selectedProduct.title}</h3>
            <p className="mb-2 mt-2 text-sm text-blue-500">
              {selectedProduct.price} AZN
            </p>
            <p className="text-sm text-[#777777]">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ title, price, image, onClick }) => (
  <div
    className="flex cursor-pointer flex-col rounded-lg p-2"
    onClick={onClick}
  >
    <div className="bg-gray-200 mb-2 h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="flex items-center justify-between">
      <p className="w-30 text-start text-[13px] leading-4">{title}</p>
    </div>
    <p className="text-gray-500 text-start text-[16px] font-medium">{price}</p>
  </div>
);

export default FirstPage;
