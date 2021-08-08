import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginFooter from './LoginFooter';
import {
  addRememberMeToLocal,
  deleteRememberMeFromLocal,
} from '../LocalStorage/rememberMeStorage';
import {
  addEmailToLocal,
  deleteEmailFromLocal,
} from '../LocalStorage/emailStorage';
import {
  addLoginStateToLocal,
  deleteLoginStateFromLocal,
} from '../LocalStorage/loginStateStorage';
import {
  deleteUserIDFromLocal,
  addUserIDToLocal,
} from '../LocalStorage/userIDStorage';
import {
  addRegistrationPhaseToLocal,
  deleteRegistrationPhaseFromLocal,
} from '../LocalStorage/registrationPhase';
import {
  addRegistrationStateToLocal,
  deleteRegistrationStateFromLocal,
} from '../LocalStorage/registrationStateStorage';

class LoginComponent extends Component {
  state = {
    loading: false,
    show: false,
  };

  login = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      await this.props.login({
        variables: {
          email: this.props.email,
          password: this.props.password,
        },
      });
    } catch (err) {
      this.setState({ loading: false });

      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (this.props.data) {
      await deleteEmailFromLocal();
      await addEmailToLocal(this.props.email);
      //burada ki iflere tam anlamıyla bakmadın, yapmadın buraya bir bak
      await deleteRememberMeFromLocal();
      await addRememberMeToLocal(this.props.rememberMe);

      await deleteRegistrationPhaseFromLocal();
      await addRegistrationPhaseToLocal('/');

      await deleteLoginStateFromLocal();
      await addLoginStateToLocal(true);

      await deleteUserIDFromLocal();
      await addUserIDToLocal(this.props.data.login.ID);

      if (this.props.data.login.registrationPhaseState) {
        this.props.router.push('/browse');
      } else {
        this.props.router.push('/');
      }

      await deleteRegistrationStateFromLocal();
      await addRegistrationStateToLocal(
        this.props.data.login.registrationPhaseState
      );
    }
  };

  render() {
    const { email, setEmail, setPassword, password } = this.props;
    return (
      <Box
        bgImage="https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/fc71fd61-a5fc-4c87-9654-39bcf6405660/TR-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        w="1349px"
        h="auto"
        minH="100%"
        minW="100%"
        bgAttachment="scroll"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box bgColor="rgba(0, 0, 0, 0.40)">
          <Flex justify="flex-start" align="center" ml={8}>
            <Link href="/" passHref>
              <a>
                <Image
                  src="/net.png"
                  width={'170'}
                  height={'120'}
                  objectFit="contain"
                  alt="Netflix"
                />
              </a>
            </Link>
          </Flex>
          <Flex w="1349px" justify="center" align="center">
            <Flex
              align="flex-start"
              w="450px"
              h="700px"
              mb="50px"
              bgColor="rgba(0, 0, 0, 0.75)"
              justify="flex-start"
              direction="column"
              p="70px"
              pb={2}
              onSubmit={this.login}
              color="white"
              as="form"
            >
              <Heading>Sign In</Heading>
              <Input
                h="50px"
                mt={8}
                borderRadius="3px"
                type="email"
                value={email}
                bgColor="#333333"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                _placeholder={{ fontSize: '14px' }}
                _active={{ bgColor: '#333333' }}
                _hover={{ bgColor: '#333333' }}
                _focus={{ bgColor: '#333333' }}
                variant="filled"
                isRequired
                size="lg"
              />
              <Input
                h="50px"
                mt={4}
                borderRadius="3px"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                bgColor="#333333"
                _placeholder={{ fontSize: '14px' }}
                _active={{ bgColor: '#333333' }}
                _hover={{ bgColor: '#333333' }}
                _focus={{ bgColor: '#333333' }}
                variant="filled"
                isRequired
                size="lg"
              />
              <Button
                size="lg"
                h="48px"
                w="full"
                mt={8}
                borderRadius="3px"
                isLoading={this.state.loading ? true : false}
                colorScheme="red"
                style={{ backgroundColor: '#f40612' }}
                type="submit"
              >
                Sign In
              </Button>
              <Flex justify="space-between" align="center" w="full" mt={2}>
                <Checkbox
                  size="sm"
                  color="#b3b3b3"
                  onChange={(e) =>
                    this.props.setRememberMe(!this.props.rememberMe)
                  }
                  // {/* buraya bak  */}
                  value={this.props.rememberMe}
                >
                  Remember me
                </Checkbox>
                <Text color="#b3b3b3" fontSize="sm">
                  Need help?
                </Text>
              </Flex>

              <Flex mt="50px">
                <Image
                  src="/facebook.png"
                  width="20px"
                  height="20px"
                  objectFit="contain"
                  alt="Facebook"
                />
                <Text color="#b3b3b3" fontSize="sm" pl={2}>
                  Login with Facebook
                </Text>
              </Flex>
              <Flex mt={2}>
                <Text fontSize="md" color="#b3b3b3">
                  New to Netflix?
                </Text>
                <Link href="/">
                  <a target="_blank">
                    <Text
                      fontSize="md"
                      _hover={{ textDecoration: 'underline' }}
                      cursor="pointer"
                      ml={2}
                      color="white"
                    >
                      Sign up now
                    </Text>
                  </a>
                </Link>
              </Flex>
              <Box d="inline-block">
                <Text
                  fontSize="smaller"
                  mt={2}
                  display="inline-block"
                  color="#8c8c8c"
                >
                  This page is protected by Google reCAPTCHA to ensure
                  you&apos;re not a bot.
                </Text>
                {this.state.show ? (
                  <Box mt={6} color="#8c8c8c">
                    <Text fontSize="smaller">
                      The information collected by Google reCAPTCHA is subject
                      to the Google{' '}
                      <Link href="https://policies.google.com/privacy">
                        <a
                          style={{
                            color: '#1871eb',
                            textDecoration: 'underline',
                          }}
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </Link>{' '}
                      and{' '}
                      <Link href="https://policies.google.com/terms">
                        <a
                          style={{
                            color: '#1871eb',
                            textDecoration: 'underline',
                          }}
                          target="_blank"
                        >
                          Terms of Service
                        </a>
                      </Link>{' '}
                      , and is used for providing, maintaining, and improving
                      the reCAPTCHA service and for general security purposes
                      (it is not used for personalized advertising by Google).
                    </Text>
                  </Box>
                ) : (
                  <Box w="min" display="inline-block">
                    <Text
                      fontSize="smaller"
                      display="inline-block"
                      w="71px"
                      cursor="pointer"
                      color="#1871eb"
                      _hover={{ textDecoration: 'underline' }}
                      onClick={(e) => this.setState({ show: !this.state.show })}
                    >
                      Learn More
                    </Text>
                  </Box>
                )}
              </Box>
            </Flex>
          </Flex>
        </Box>
        <LoginFooter />
      </Box>
    );
  }
}

export default LoginComponent;
