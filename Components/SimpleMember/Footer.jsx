import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
} from '../../src/SimpleMember/footer';

function Footer() {
  return (
    <Box bgColor="#f3f3f3" color="#757575">
      <Container maxW="container.xl" p={4}>
        <Text fontWeight="semibold" fontSize="lg" p={2} mb={5}>
          Questions? Contact us.
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
      </Container>
    </Box>
  );
}

export default Footer;
