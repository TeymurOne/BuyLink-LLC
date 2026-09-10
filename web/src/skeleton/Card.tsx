import { Box, Skeleton } from '@mui/material';

const Card = () => {
  return (
    <>
      <div className="-mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            borderRadius: '100px',
            border: '1px',
          }}
        >
          <Skeleton variant="text" height={220} sx={{ fontSize: '1rem' }} />
        </Box>

        <Box sx={{ width: '100%', borderRadius: '100px', border: '1px' }}>
          <Skeleton variant="text" height={220} sx={{ fontSize: '1rem' }} />
        </Box>
        <Box sx={{ width: '100%', borderRadius: '100px', border: '1px' }}>
          <Skeleton variant="text" height={220} sx={{ fontSize: '1rem' }} />
        </Box>
        <Box sx={{ width: '100%', borderRadius: '100px', border: '1px' }}>
          <Skeleton variant="text" height={220} sx={{ fontSize: '1rem' }} />
        </Box>
      </div>
      <div className="-mt-30 grid grid-cols-1  gap-x-8   lg:grid-cols-2">
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '100px',
            border: '1px',
          }}
        >
          <Skeleton variant="text" height={712} />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '100px',
            border: '1px',
          }}
        >
          <Skeleton variant="text" height={712} />
        </Box>
      </div>
    </>
  );
};

export default Card;
