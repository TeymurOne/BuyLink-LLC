import Pusher from 'pusher-js';

const pusherInstance = new Pusher('fd684aeaa46eb6e72b86', {
  cluster: 'ap2',
});

export default pusherInstance;
