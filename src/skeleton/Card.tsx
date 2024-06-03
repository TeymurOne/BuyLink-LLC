import { Box, Skeleton } from '@mui/material';

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 -mt-10 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Box sx={{ width: '100%', borderRadius: '100px', border: '1px' }}>
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
      <div className="lg:grid-cols-2 -mt-30 grid  gap-x-8   grid-cols-1">
        <Box sx={{ width: '100%', height:"100%", borderRadius: '100px', border: '1px' }}>
          <Skeleton variant="text" height={712}  />
        </Box>
        <Box sx={{ width: '100%', height:"100%", borderRadius: '100px', border: '1px' }}>
          <Skeleton variant="text" height={712}  />
        </Box>
      </div>
    </>
  );
};

export default Card;
