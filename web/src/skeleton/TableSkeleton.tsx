import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TableSkeleton({ count, height }: any) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <Skeleton variant="text" height={height} sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" height={height} sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" height={height} sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" height={height} sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" height={height} sx={{ fontSize: '2rem' }} />
        </Box>
      ))}
    </>
  );
}
