import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import recommend from '../../images/icon/recommend.png';
import 'swiper/css';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FirstPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [productView, setProductView] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [discountResponse, setDiscountResponse] = useState(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const filteredCatalogue = productView?.data?.catalogue
    ?.map((catalogue) => ({
      ...catalogue,
      products: catalogue.products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (catalogue) =>
        catalogue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        catalogue.products.length > 0
    );


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
              'X-localization': i18n.language,
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product view');
        }
        const data = await response.json();
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
  }, [id, i18n.language]);

  const isSpecialTitle =
    productView?.data?.title === 'Crazzy Simbioz' ||
    productView?.data?.title === 'Frango Baku' ||
    productView?.data?.title === 'Megapolis Baku';

  const handleDiscountClick = async () => {
    try {
      const response = await fetch(
        `https://api.buylink.info/api/add-basket/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-localization': i18n.language,
          },
          credentials: 'include',
          body: JSON.stringify({
            productId: id,
            discount: true,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to apply discount');
      }

      const data = await response.json();
      setDiscountResponse(data);
      localStorage.setItem('uuid', data.uuid);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('image', data.user.image);
      navigate(`/partner/qr/${id}`);
    } catch (err) {
      alert(t('webview.7'));
    }
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const openBottomSheet = (product, productIndex, categoryIndex) => {
    setSelectedProduct(product);
    setCurrentProductIndex(productIndex);
    setCurrentCategoryIndex(categoryIndex);
    setIsVisible(true);
  };


  const navigateProduct = (direction) => {
    if (currentCategoryIndex === null || currentProductIndex === null) return;

    const currentCategory = productView?.data?.catalogue[currentCategoryIndex];
    const newIndex = currentProductIndex + direction;


    if (newIndex >= 0 && newIndex < currentCategory?.products?.length) {
      const nextProduct = currentCategory?.products[newIndex];
      setSelectedProduct(nextProduct);
      setCurrentProductIndex(newIndex);
    }
  };

  const closeBottomSheet = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setCurrentProductIndex(null);
      setCurrentCategoryIndex(null); // Reset category context
    }, 300);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white p-4 pb-24 font-poppins">
      {isVisible && (
        <div
          className={`fixed inset-0 ${scrollDirection === 'down' ? 'h-0 opacity-0' : 'h-auto opacity-100'} z-40 bg-[#8080808c] bg-opacity-50 transition-opacity`}
          onClick={closeBottomSheet}
        />
      )}
      <div className="mb-4 flex items-center gap-3">
        <div>
          <img
            className=" w-[54px] items-center justify-center rounded-full  text-xl font-bold text-white"
            src={productView?.data?.image}
            alt={productView?.data?.title}
          />
        </div>

        <div>
          <h2 className="text-[24px] font-semibold">
            {productView?.data?.title}
          </h2>
          <div className="flex items-center gap-1">
            <img src={recommend} alt={t('webview.1')} />
            <div className="flex w-[200px] items-center justify-between gap-1">
              <p className="text-xs text-[#777777]">
                {productView?.data?.recommendations_count} {t('webview.2')}
              </p>
              <div>
                <select
                  value={i18n.language}
                  onChange={changeLanguage}
                  className="rounded-md border bg-[#F2F3F5] px-2 py-1 text-xs"
                  style={{
                    appearance: 'none',
                    MozAppearance: 'none',
                    WebkitAppearance: 'none',
                    background: 'none',
                  }}
                >
                  <option value="az" className="bg-[#F2F3F5] text-xs focus:bg-blue-500">
                    AZ
                  </option>
                  <option value="en" className=" text-xs bg-[#F2F3F5]">
                    EN
                  </option>
                  <option value="ru" className="text-xs bg-[#F2F3F5]">
                    RU
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed -top-1 left-0 right-0 z-50 bg-white p-3  transition-transform duration-300 ${scrollDirection === 'down' ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex items-center gap-2 rounded-lg bg-white">
          <input
            type="text"
            placeholder={productView?.data?.title}
            className="flex-1 rounded-lg border-none bg-[#F6F6F6] text-sm focus:outline-none "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {productView?.data?.catalogue?.map((catalogue, index) => (
            <button
              key={index}
              className={`whitespace-nowrap rounded-2xl px-4 py-1 text-sm ${selectedCategory === catalogue.name ? 'bg-blue-500 text-white' : 'bg-[#ECEEFF]'}`}
              onClick={() =>
                navigate(`/category/${encodeURIComponent(catalogue.name)}`, {
                  state: { products: catalogue.products },
                })
              }
            >
              {catalogue.name || t('webview.3')}
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-[13px] leading-6">
        {productView?.data?.description}
      </p>

      {filteredCatalogue?.map(
        (catalogue, catalogueIndex) =>
          (!selectedCategory || selectedCategory === catalogue.name) && (
            <div key={catalogueIndex} className="mb-6">

              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[21px] font-medium">
                  {catalogue.name || t('webview.3')}
                </h3>
                <button
                  className="text-sm text-blue-500 underline"
                  onClick={() =>
                    navigate(
                      `/category/${encodeURIComponent(catalogue.name)}`,
                      {
                        state: { products: catalogue.products },
                      },
                    )
                  }
                >
                  {t('webview.17')}
                </button>
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                className="overflow-visible"
              >
                {catalogue.products?.map((product, productIndex) => (
                  <SwiperSlide key={product.id} className="!w-[132px]">
                    <ProductCard
                      title={product.title}
                      price={`${product.price} AZN`}
                      image={product.image}
                      onClick={() =>
                        openBottomSheet(product, productIndex, catalogueIndex)
                      } // Fix: Pass catalogueIndex
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ),
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 bg-white p-4 text-[13px] shadow-lg">
        <a
          href="https://app.buylink.info/"
          target="_blank"
          rel="noopener noreferrer"
          className={
            isSpecialTitle
              ? "flex-1 rounded-lg bg-[#4C5DF5] py-3.5 font-medium text-center text-white"
              : "flex-1 rounded-xl border-2 border-[#4C5DF5] py-3.5  text-center font-medium text-[#0820FD]"
          }
        >
          {t('webview.5')},{t('webview.15')} {productView?.data?.referrer_commission}%{' '}
          {t('webview.16')}
        </a>
        {productView?.data?.title !== 'Crazzy Simbioz' &&
          productView?.data?.title !== 'Frango Baku' &&
          productView?.data?.title !== 'Megapolis Baku' && (
            <button
              onClick={handleDiscountClick}
              className="flex-1 rounded-lg bg-[#4C5DF5] py-3.5 font-medium text-white"
            >
              {t('webview.8')} {productView?.data?.user_discount}%{' '}
              {t('webview.6')}
            </button>
          )}
      </div>

      {selectedProduct && (
        <div
          className={`fixed inset-x-0 bottom-0 z-50 transform rounded-t-lg bg-white p-4 shadow-lg transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-4 flex items-center justify-end">
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
          <div className="relative flex items-center">
            <button
              disabled={currentProductIndex === 0}
              onClick={() => navigateProduct(-1)}
              className={`absolute left-[-10px] top-32 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#95959580] shadow-lg ${
                currentProductIndex === 0 ? 'cursor-not-allowed opacity-65' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex-1 px-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="mb-4 h-70 w-full rounded-lg object-cover"
              />
              <h3 className="text-lg font-medium">{selectedProduct.title}</h3>
              <p className="mb-2 mt-2 text-sm font-medium text-[#777777]">
                {selectedProduct.price} AZN
              </p>
              <p className="text-sm text-[#777777]">
                {selectedProduct.description}
              </p>
            </div>

            <button
              disabled={
                currentProductIndex ===
                productView?.data?.catalogue[currentCategoryIndex]?.products
                  ?.length -
                  1
              }
              onClick={() => navigateProduct(1)}
              className={`absolute right-[-10px] top-32 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#95959580] shadow-lg ${
                currentProductIndex ===
                productView?.data?.catalogue[currentCategoryIndex]?.products
                  ?.length -
                  1
                  ? 'cursor-not-allowed opacity-65'
                  : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
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
