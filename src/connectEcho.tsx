import echo from './echo';

export const connectEcho = (channel = false, isPrivate = true, userId) => {
  if (!userId) {
    throw new Error('User ID is required to connect to a channel.');
  }

  const channelName = channel || `user.${userId}`;
  return echo[isPrivate ? 'private' : 'channel'](channelName);
};