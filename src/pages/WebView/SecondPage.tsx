import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connectEcho } from '../../connectEcho.tsx';
import echo from '../../echo.tsx';
import qravatar from '../../images/icon/avatarqr.png';
import { useTranslation } from 'react-i18next';

const SecondPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [uuid, setUuid] = useState('');
  const [productView, setProductView] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const name = localStorage.getItem('name');
  const image = localStorage.getItem('image');
  useEffect(() => {
    const storedUuid = localStorage.getItem('uuid');
    if (storedUuid) {
      setUuid(storedUuid);
      const extractedProductId = storedUuid.split('-')[1];
    } else {
      alert('No UUID found. Returning to the previous page.');
      navigate(-1);
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      const fetchProductView = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.buylink.info/api/partner/${id}`,
            {
              method: 'GET',
              credentials: 'include',
            },
          );
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProductView(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProductView();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const channel = connectEcho(true, false, id);

      channel.listen('RefererClaimProductEvent', (event) => {
        console.log('QR scanned event received:', event);
        navigate(`/partner/final/`);
      });

      return () => {
        echo.leaveChannel(`referer-claim.product.${id}`);
      };
    }
  }, [id, navigate]);

   const qrCodeUrl = uuid
    ? `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(uuid)}&size=256x256`
    : '';

  return (
    <div className="min-h-screen bg-[#F2F3F5] p-4 font-poppins">
      <div className="mb-6 flex items-center">
        <button onClick={() => navigate(-1)} className="text-gray-600 mr-4">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <h1 className="mb-4 text-[24px] font-medium leading-8">QR Kod</h1>

      <p className="text-gray-600 mb-4 text-[18px] font-normal">
        {t('webview.10')} {productView?.data?.user_discount}% {t('webview.11')}
      </p>
      <p className="mb-6 text-sm text-[#777777]">{t('webview.12')}</p>

      <div className="rounded-lg bg-white p-5 shadow">
        <div className="mb-4 flex justify-between">
          <div>
            <h2 className="mb-3 text-[16px] font-medium leading-6 text-[#0E0E0E]">
              {productView?.data?.title}
            </h2>
            <p className="mb-3 text-sm font-normal leading-5 text-[#0E0E0E]">
              {productView?.data?.user_discount}% {t('webview.13')}
            </p>
            <div className="flex items-center gap-2">
              <img src={image} alt="QR Avatar" className="w-8" />
              <p className="text-[16px] font-medium text-[#0E0E0E]">
                {name}
              </p>
            </div>
          </div>
          <div className="w-22 overflow-hidden rounded">
            <img
              src={productView?.data?.image}
              alt="Mokko Rooms Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          {uuid ? (
            <img src={qrCodeUrl} alt="QR Code" className="mb-6 mt-6 w-60" />
          ) : (
            <p>Loading QR Code...</p>
          )}
          <div className="ml-auto">
            <button className="flex items-center text-sm font-normal text-blue-500">
              {t('webview.14')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
