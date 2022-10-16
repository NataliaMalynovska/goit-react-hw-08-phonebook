import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '../common/Box';

export const Layout = () => {
  return (
    <Box as="div" 
    backgroundColor="#c3c8db"
    m="0px"
    py="0px"
    px="16px"
    maxWidth="960px"
    mx="auto"
   >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box >
  );
};
