import { Flex, Box, Container, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import { Footer1, Footer2, Footer3, Footer4 } from '../../src/signup/footer';
import Language from '../toolbox/language';

function Footer() {
  return (
    <Box bgColor="#f3f3f3" color="#757575">
      <Container maxW="container.xl" p={4}>
        <Text fontWeight="semibold" fontSize="lg" p={2} mb={5}>
          Questions? Call 0850-390-7444
        </Text>
        <Flex justify="space-between" mr={80}>
          <Box p={2}>
            {Footer1.map((f, i) => (
              <Text fontSize="sm" key={i} pb={3}>
                {f}
              </Text>
            ))}
          </Box>
          <Box p={2}>
            {Footer2.map((f, i) => (
              <Text fontSize="sm" pb={3} key={i}>
                {f}
              </Text>
            ))}
          </Box>
          <Box p={2}>
            {Footer3.map((f, i) => (
              <Text fontSize="sm" pb={3} key={i}>
                {f}
              </Text>
            ))}
          </Box>
          <Box p={2}>
            {Footer4.map((f, i) => (
              <Text fontSize="sm" pb={3} key={i}>
                {f}
              </Text>
            ))}
          </Box>
        </Flex>
        <Box p={2}>
          <Language />
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
