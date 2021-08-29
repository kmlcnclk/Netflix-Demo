import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import BrowseMainVideosPageComponentChild from '../Components/Child/BrowseMainVideosPageComponentChild';
import { getLoginStateFromLocal } from '../LocalStorage/loginStateStorage';

function Kids() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/');

    const ls = getLoginStateFromLocal()[0];
    if (!ls) {
      router.push('/');
    }
  }, [router]);
  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <BrowseMainVideosPageComponentChild />
    </Box>
  );
}

export default Kids;
