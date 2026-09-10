import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function MapSkeleton() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Skeleton variant="text" height={220} sx={{ fontSize: '1rem' }} />
      </Box>
    </>
  );
}
