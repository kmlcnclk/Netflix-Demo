import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import SettingsRestIDFooter from '../SettingsRestID/SettingsRestIDFooter';
import YourAccountHeader from './YourAccountHeader';
import Head from 'next/head';
import { getImageUrlFromLocal } from '../../LocalStorage/imageUrlStorage';
import { getImageNameFromLocal } from '../../LocalStorage/imageNameStorage';

function LayoutYourAccount({ children }) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    const iu = getImageUrlFromLocal()[0];
    const iname = getImageNameFromLocal()[0];

    setImageUrl(iu);
    setImageName(iname);
  }, []);

  return (
    <Box bgColor="#f3f3f3">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <YourAccountHeader imageUrl={imageUrl} imageName={imageName} />
      <Flex
        justify="center"
        align="center"
        direction="column"
        bgColor="#f3f3f3"
        mt="70px"
      >
        {children}
        <Box w="100%">
          <SettingsRestIDFooter code="930239" />
        </Box>
      </Flex>
    </Box>
  );
}

export default LayoutYourAccount;
