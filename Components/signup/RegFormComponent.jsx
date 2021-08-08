import React, { Component } from 'react';
import {
  Container,
  Flex,
  Text,
  Box,
  Button,
  Heading,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import Header from './Header';
import { addEmailStateToLocal } from '../../LocalStorage/emailStateStorage';
import Link from 'next/link';
import Footer from './Footer';
import { addLoginStateToLocal } from '../../LocalStorage/loginStateStorage';
import {
  addEmailToLocal,
  deleteEmailFromLocal,
  getEmailFromLocal,
} from '../../LocalStorage/emailStorage';
import {
  addRegistrationPhaseToLocal,
  deleteRegistrationPhaseFromLocal,
} from '../../LocalStorage/registrationPhase';
import {
  addUserIDToLocal,
  deleteUserIDFromLocal,
} from '../../LocalStorage/userIDStorage';
import {
  addRegistrationStateToLocal,
  deleteRegistrationStateFromLocal,
} from '../../LocalStorage/registrationStateStorage';

class RegFormComponent extends Component {
  state = {
    loading: false,
    doNotEmailMe: false,
  };

  register = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      await this.props.register({
        variables: {
          email: this.props.email,
          password: this.props.password,
          doNotEmailMe: this.props.doNotEmailMe,
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
      try {
        await this.props.isReceivedMailAlready({
          variables: {
            email: this.props.email,
          },
        });
      } catch (err) {
        this.props.toast({
          title: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      if (this.props.isReceivedMailAlreadyData) {
        const email = await getEmailFromLocal()[0];

        if (email != this.props.email) {
          await deleteEmailFromLocal();

          await addEmailToLocal(this.props.email);
        }

        await deleteRegistrationPhaseFromLocal();

        await addRegistrationPhaseToLocal('/');

        await addEmailStateToLocal(
          this.props.isReceivedMailAlreadyData.isReceivedMailAlready.emailState
        );
        await addLoginStateToLocal(true);

        await deleteUserIDFromLocal();
        await addUserIDToLocal(this.props.data.registerUser.ID);

        await deleteRegistrationStateFromLocal();
        await addRegistrationStateToLocal(false);

        setTimeout(() => {
          this.props.router.push('/signup/');
        }, 2000);
      }
    }
  };

  render() {
    const { setEmail, setPassword, doNotEmailMe, setDoNotEmailMe, email } =
      this.props;
    return (
      <Box>
        <Header />
        {this.props.emailState ? (
          <Box w="full" borderBottom="1px #e3e3e3 solid">
            <Container w="480px" pt="30px" pb="60px">
              <Text as="span" m={2} fontSize="lg">
                STEP <strong>1</strong> OF <strong>3</strong>
              </Text>
              <Heading size="lg" m={2}>
                Account Created
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
            <Container w="480px" pt="30px" pb="60px">
              <Text as="span" m={2} fontSize="lg">
                STEP <strong>1</strong> OF <strong>3</strong>
              </Text>
              <Heading size="lg" m={2}>
                Create a password to start your membership
              </Heading>
              <Text fontSize="lg" m={2} pt={1} fontWeight="semibold">
                Just a few more steps and you&apos;re done!
              </Text>
              <Text fontSize="lg" m={2} pt={1} fontWeight="semibold">
                We hate paperwork, too.
              </Text>
              <Flex
                as="form"
                justify="center"
                onSubmit={this.register}
                align="center"
                direction="column"
                mt="20px"
              >
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  h="60px"
                  borderRadius="none"
                  placeholder="Email"
                  _placeholder={{ fontSize: '14px' }}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white', borderColor: 'blue' }}
                  border="black 1px solid"
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  h="60px"
                  borderRadius="none"
                  placeholder="Add a password"
                  _placeholder={{ fontSize: '14px' }}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white', borderColor: 'blue' }}
                  isRequired
                  border="solid 1px red"
                  bgColor="white"
                  size="lg"
                />
                <Flex w="full" mt={3} justify="start" align="center">
                  <Checkbox
                    size="lg"
                    onChange={(e) => setDoNotEmailMe(!doNotEmailMe)}
                    value={doNotEmailMe}
                  >
                    Please do not email me Netflix special offers
                  </Checkbox>
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
            </Container>
          </Box>
        )}

        <Footer />
      </Box>
    );
  }
}
export default RegFormComponent;
