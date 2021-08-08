import React, { Component } from 'react';
import {
  Flex,
  Box,
  Container,
  Text,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { addLoginStateToLocal } from '../../LocalStorage/loginStateStorage';
import Link from 'next/link';
import {
  addRegistrationPhaseToLocal,
  deleteRegistrationPhaseFromLocal,
} from '../../LocalStorage/registrationPhase';
import {
  addRegistrationStateToLocal,
  deleteRegistrationStateFromLocal,
} from '../../LocalStorage/registrationStateStorage';

class PasswordComponent extends Component {
  state = {
    inputState: false,
    inputRequiredState: false,
    inputLengthState: false,
    inputBorderColor: '',
    password: '',
    loading: false,
  };
  // inputChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   this.setState({ inputState: false });
  //   this.setState({ inputBorderColor: '' });
  //   this.setState({ inputRequiredState: false });
  //   if (this.state.password.length <= 3 || this.state.password.length >= 61) {
  //     this.setState({ inputLengthState: true });
  //     this.setState({ inputState: true });
  //     this.setState({ inputBorderColor: '#b92d2b' });
  //   } else {
  //     this.setState({ inputLengthState: false });
  //     this.setState({ inputState: false });
  //     this.setState({ inputBorderColor: '' });
  //   }
  //   if (this.state.password == '') {
  //     this.setState({ inputRequiredState: true });
  //     this.setState({ inputLengthState: false });
  //   }
  // };
  // inputBlur = (e) => {
  //   if (this.state.password == '') {
  //     this.setState({ inputState: true });
  //     this.setState({ inputRequiredState: true });
  //     this.setState({ inputBorderColor: '#b92d2b' });
  //     this.setState({ inputLengthState: false });
  //   } else if (this.state.inputLengthState) {
  //     this.setState({ inputState: true });
  //     this.setState({ inputBorderColor: '#b92d2b' });
  //   }
  // };
  login = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      await this.props.login({
        variables: {
          email: await getEmailFromLocal()[0],
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
      await addLoginStateToLocal(true);

      await deleteRegistrationPhaseFromLocal();

      await addRegistrationPhaseToLocal('/');

      await deleteRegistrationStateFromLocal();
      await addRegistrationStateToLocal(
        this.props.data.login.registrationPhaseState
      );

      setTimeout(() => {
        this.props.router.push('/signup/');
      }, 2000);
    }
  };

  render() {
    const { setPassword, email } = this.props;
    return (
      <Box>
        <Header />

        {this.props.loginState ? (
          <Box w="full" borderBottom="1px #e3e3e3 solid">
            <Container w="480px" pt="30px" pb="60px">
              <Text as="span" m={2} fontSize="lg">
                STEP <strong>1</strong> OF <strong>3</strong>
              </Text>
              <Heading size="lg" m={2}>
                Logged In
              </Heading>
              <Text fontSize="lg" m={2} pt={1} fontWeight="semibold">
                Use this email to access your account:
              </Text>
              <Text
                textAlign="center"
                fontSize="xl"
                m={2}
                mt={12}
                mb={12}
                pt={1}
                fontWeight="bold"
              >
                {email}
              </Text>
              <Link href="/signup/">
                <a>
                  <Button
                    colorScheme="red"
                    type="submit"
                    bgColor="#e50914"
                    _hover={{ bgColor: '#f6121D' }}
                    _active={{ bgColor: '#e50914' }}
                    size="lg"
                    w="full"
                    h="64px"
                    mt={3}
                  >
                    <Text fontSize="24px">Next</Text>
                  </Button>
                </a>
              </Link>
            </Container>
          </Box>
        ) : (
          <Box w="full" borderBottom="1px #e3e3e3 solid">
            <Container maxW="container.sm" p="30px" pl={20} pr={20} pb="140px">
              <Box mt="20px" color="#333333">
                <Text as="span" m={2} mt={7} fontSize="lg">
                  STEP <strong>1</strong> OF <strong>3</strong>
                </Text>
                <Heading m={2} size="lg">
                  Welcome back!
                </Heading>
                <Heading m={2} size="lg">
                  Joining Netflix is easy.
                </Heading>
                <Text fontSize="lg" m={2} mt={3} mb={3}>
                  Enter your password and you&apos;ll be watching in no time.
                </Text>
                <Text fontSize="xl" m={2} mb={0} mt={4} fontWeight="semibold">
                  Email
                </Text>
                <Text fontSize="xl" ml={2} mr={2} mb={2} fontWeight="bold">
                  {email}
                </Text>
                <Flex
                  as="form"
                  m={2}
                  onSubmit={this.login}
                  justify="flex-start"
                  align="center"
                  direction="column"
                >
                  <Input
                    type="password"
                    h="60px"
                    ml={2}
                    mr={2}
                    mt={3}
                    name="password"
                    borderRadius="none"
                    placeholder="Enter your password"
                    _placeholder={{ fontSize: '14px' }}
                    _active={{ bgColor: 'white' }}
                    _hover={{ bgColor: 'white' }}
                    _focus={{ bgColor: 'white' }}
                    onChange={(e) => setPassword(e.target.value)}
                    errorBorderColor="red"
                    onBlur={this.inputBlur}
                    border="black 1px solid"
                    borderColor={
                      this.state.inputState
                        ? this.state.inputBorderColor
                        : '#8c8c8c'
                    }
                    isRequired
                    bgColor="white"
                    size="lg"
                    mb={3}
                  />
                  {this.state.inputRequiredState ? (
                    <Text as="span" color="#b92d2b">
                      Password is required!
                    </Text>
                  ) : null}
                  {this.state.inputLengthState ? (
                    <Text as="span" color="#b92d2b">
                      Password should be between 4 and 60 characters
                    </Text>
                  ) : null}
                  <Flex w="full" mt={2} mb={2}>
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      color="#0071eb"
                      cursor="pointer"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      Forgot your password?
                    </Text>
                  </Flex>

                  <Button
                    colorScheme="red"
                    type="submit"
                    bgColor="#e50914"
                    isLoading={this.state.loading ? true : false}
                    _hover={{ bgColor: '#f6121D' }}
                    _active={{ bgColor: '#e50914' }}
                    size="lg"
                    w="full"
                    h="64px"
                    mt={3}
                  >
                    <Text fontSize="24px">Next</Text>
                  </Button>
                </Flex>
              </Box>
            </Container>
          </Box>
        )}

        <Footer />
      </Box>
    );
  }
}

export default PasswordComponent;
