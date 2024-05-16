import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TableSkeleton({ count }:any) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <Skeleton variant="text" height={24} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" height={24} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" height={24} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" height={24} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" height={24} sx={{ fontSize: '1rem' }} />
        </Box>
      ))}
    </>
  );
}

