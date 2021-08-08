import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import LatestComponent from '../Components/Browse/LatestComponent';

function Latest() {
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

      <LatestComponent />
    </Box>
  );
}

export default Latest;
