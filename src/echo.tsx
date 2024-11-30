import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Import or define your PusherEnvConfig class in JavaScript
const PusherEnvConfig = {
  pusherAppId: 1693159,
  pusherAppKey: 'fd684aeaa46eb6e72b86',
  pusherAppSecret: 'eb1cd4e2049adb0d5990',
  pusherPort: 443,
  pusherScheme: 'https',
  pusherAppCluster: 'ap2',
};

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: PusherEnvConfig.pusherAppKey,
  wsPort: PusherEnvConfig.pusherPort,
  wssPort: PusherEnvConfig.pusherPort,
  cluster: PusherEnvConfig.pusherAppCluster,
  disableStats: true,
  encrypted: PusherEnvConfig.pusherScheme === 'https',
  enabledTransports: ['ws', 'wss'],
  auth: {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  },
});

export default echo;
