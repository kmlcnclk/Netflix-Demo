import { Box } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

function LayoutSignup({ children }) {
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix.png" />
        <meta
          name="description"
          content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        />
      </Head>
      <Box> {children}</Box>
    </Box>
  );
}

export default LayoutSignup;
