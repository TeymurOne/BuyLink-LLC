import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { connectEcho } from '../../connectEcho';

const ThirdPage = () => {
  const [uuid, setUuid] = useState('');
  const [productId, setProductId] = useState('');
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const queryUuid = searchParams.get('uuid');
    if (queryUuid) {
      setUuid(queryUuid);
      const extractedProductId = queryUuid.split('-')[1];
      setProductId(extractedProductId);

      // Subscribe to WebSocket channel
      const channelName = `referer-claim.${queryUuid}`;
      const echoChannel = connectEcho(channelName, true, queryUuid);

      echoChannel.listen('DiscountClaimedEvent', (data) => {
        setEventData(data);
        setLoading(false);
      });

      // Clean up WebSocket subscription
      return () => {
        echoChannel.stopListening('DiscountClaimedEvent');
        echoChannel.unsubscribe();
      };
    } else {
      alert('Invalid QR code or missing UUID.');
      navigate('/');
    }
  }, [searchParams, navigate]);

  if (loading) {
    return <p>Loading event data...</p>;
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-[24px] font-medium">Third Page</h1>
      <p>UUID: {uuid}</p>
      <p>Product ID: {productId}</p>
      <pre>{JSON.stringify(eventData, null, 2)}</pre>
    </div>
  );
};

export default ThirdPage;
