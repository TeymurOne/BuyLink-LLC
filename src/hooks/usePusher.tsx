import { useEffect, useState } from 'react';
import pusherInstance from '../pusher.tsx';

const usePusher = (channelName, eventName, callback) => {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    if (!channelName) return;

    const channel = pusherInstance.subscribe(channelName);
    setChannel(channel);

    if (eventName) {
      channel.bind(eventName, callback);
    }

    return () => {
      if (channel) {
        if (eventName) {
          channel.unbind(eventName, callback);
        }
        pusherInstance.unsubscribe(channelName);
      }
    };
  }, [channelName, eventName, callback]);

  return channel;
};

export default usePusher;
