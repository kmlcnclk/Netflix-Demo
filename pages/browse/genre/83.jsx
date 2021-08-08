import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import B83Component from '../../../Components/Browse/genre/B83Component';

function B83() {
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

      <B83Component />
    </Box>
  );
}

export default B83;
