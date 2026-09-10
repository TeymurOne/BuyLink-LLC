import echo from './echo';

export const connectEcho = (channel = false, isPrivate = false, partnerId) => {
  if (!partnerId) {
    throw new Error('User ID is required to connect to a channel.');
  }

  const channelName = channel || `referer-claim.product.${partnerId}`;
  return echo[isPrivate ? 'private' : 'channel'](
    `referer-claim.product.${partnerId}`,
  );
};