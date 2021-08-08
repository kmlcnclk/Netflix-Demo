import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import {
  LoginFooter1,
  LoginFooter2,
  LoginFooter3,
  LoginFooter4,
} from '../src/LoginFooter';
import Language from './toolbox/language';

function LoginFooter() {
  return (
    <Box w="100%" h="258px">
      <Box w="1349px" bgColor="rgba(0, 0, 0, 0.80)" color="#8c8c8c">
        <Flex align="center" direction="column">
          <Container
            maxW="container.lg"
            pl="70px"
            pr="70px"
            pt="30px"
            pb="46px"
          >
            <Text fontSize="md" mb={5}>
              Questions? Call 0850-390-7444
            </Text>
            <Flex justify="space-between" align="center" mt={10}>
              <Box>
                {LoginFooter1.map((f, i) => (
                  <Text fontSize="sm" key={i} mb={2}>
                    {f}
                  </Text>
                ))}
              </Box>
              <Box>
                {LoginFooter2.map((f, i) => (
                  <Text fontSize="sm" key={i} mb={2}>
                    {f}
                  </Text>
                ))}
              </Box>
              <Box>
                {LoginFooter3.map((f, i) => (
                  <Text fontSize="sm" key={i} mb={2}>
                    {f}
                  </Text>
                ))}
              </Box>
              <Box>
                {LoginFooter4.map((f, i) => (
                  <Text fontSize="sm" key={i} mb={2}>
                    {f}
                  </Text>
                ))}
              </Box>
            </Flex>
            <Flex mt={7}>
              <Language />
            </Flex>
          </Container>
        </Flex>
      </Box>
    </Box>
  );
}

export default LoginFooter;
