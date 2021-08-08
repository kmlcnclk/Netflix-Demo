import { Box } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import Header from './Header';

function Layout({ children }) {
  return (
    <Box bg="#141414">
      <Head>
        <title>Netflix</title>
      </Head>
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
