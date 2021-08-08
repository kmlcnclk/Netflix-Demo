import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Foot1,
  Foot2,
  Foot3,
  Foot4,
} from '../../src/SettingsRestID/SettingsRestIDFooter';

function SettingsRestIDFooter({ code }) {
  const [serviceCode, setServiceCode] = useState('Service Code');

  const serviceCodeChange = async () => {
    await setServiceCode(code);
  };

  return (
    <Box
      bgColor="#f3f3f3"
      borderTop="1px solid #e3e3e3"
      color="#757575"
      p={10}
      ml={7}
      mr={7}
    >
      <Link href="">
        <a>
          <Text
            fontSize="md"
            fontWeight="semibold"
            _hover={{ color: '#757575', textDecoration: 'underline' }}
            mb={5}
          >
            Questions? Contact us.
          </Text>
        </a>
      </Link>
      <Flex justify="space-between" mr={80}>
        <Box p={2} pl={0}>
          {Foot1.map((f, i) => (
            <Text fontSize="sm" key={i} pb={3}>
              {f}
            </Text>
          ))}
        </Box>
        <Box p={2}>
          {Foot2.map((f, i) => (
            <Text fontSize="sm" pb={3} key={i}>
              {f}
            </Text>
          ))}
        </Box>
        <Box p={2}>
          {Foot3.map((f, i) => (
            <Text fontSize="sm" pb={3} key={i}>
              {f}
            </Text>
          ))}
        </Box>
        <Box p={2}>
          {Foot4.map((f, i) => (
            <Text fontSize="sm" pb={3} key={i}>
              {f}
            </Text>
          ))}
        </Box>
      </Flex>

      <Flex
        justify="center"
        align="center"
        mt={5}
        border="#808080 solid 1px"
        bgColor="#f3f3f3"
        color="#808080"
        w="108px"
        h="36px"
        cursor="pointer"
        onClick={serviceCodeChange}
      >
        <Text fontSize="md" textAlign="center" fontWeight="semibold">
          {serviceCode}
        </Text>
      </Flex>
    </Box>
  );
}

export default SettingsRestIDFooter;
