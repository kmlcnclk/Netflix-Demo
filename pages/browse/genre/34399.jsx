import React from 'react';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import B34399Component from '../../../Components/Browse/genre/B34399Component';

function B34399() {
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

      <B34399Component />
    </Box>
  );
}

export default B34399;
