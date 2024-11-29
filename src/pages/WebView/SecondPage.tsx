import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../images/icon/exampleavatar.png';
import qravatar from '../../images/icon/avatarqr.png';
import usePusher from '../../hooks/usePusher.tsx';

const SecondPage = () => {
  const navigate = useNavigate();
  const [uuid, setUuid] = useState('');
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    const storedUuid = localStorage.getItem('uuid');
    if (storedUuid) {
      setUuid(storedUuid);
      const extractedProductId = storedUuid.split('-')[1];
      setProductId(extractedProductId);
    } else {
      alert('No UUID found. Returning to the previous page.');
      navigate(-1);
    }
  }, [navigate]);

  const qrCodeUrl = uuid
    ? `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(uuid)}&size=256x256`
    : '';

  usePusher(`referer-claim.product.${productId}`, 'read-event', (data) => {
    console.log('Received event:', data);
    if (data.success) {
      navigate('/partner/final');
    }
  });

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

      <h1 className="mb-4 text-[24px] font-medium leading-8">QR Code</h1>

      <p className="text-gray-600 mb-4 text-[18px] font-normal">
        Scan QR code to get 10% discount
      </p>
      <p className="mb-6 text-sm text-[#777777]">
        If you choose this method, then you cannot make a purchase online. To
        receive the discount, you must show your unique code on the spot.
      </p>

      <div className="rounded-lg bg-white p-5 shadow">
        <div className="mb-4 flex justify-between">
          <div>
            <h2 className="mb-3 text-[16px] font-medium leading-6 text-[#0E0E0E]">
              Mokko Rooms
            </h2>
            <p className="mb-3 text-sm font-normal leading-5 text-[#0E0E0E]">
              10% discount
            </p>
            <div className="flex items-center gap-2">
              <img src={qravatar} alt="QR Avatar" />
              <p className="text-[16px] font-medium text-[#0E0E0E]">
                Zarina Majidova
              </p>
            </div>
          </div>
          <div className="w-22 overflow-hidden rounded">
            <img
              src={avatar}
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
              Hide QR
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
