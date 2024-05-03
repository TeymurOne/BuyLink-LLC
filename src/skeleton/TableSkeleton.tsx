import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TableSkeleton() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Skeleton variant="text" height={70} sx={{ fontSize: '1rem' }} />
      </Box>
      <Skeleton variant="text" height={14} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" height={14} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" height={14} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" height={14} sx={{ fontSize: '1rem' }} />
    </>
  );
}
