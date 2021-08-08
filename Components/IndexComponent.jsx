import React, { Component } from 'react';
import { Collapse } from '@chakra-ui/transition';
import HomeHeader from '../Components/HomeHeader';
import Image from 'next/image';
import { Questions } from '../src/Questions';
import { Foot1, Foot2, Foot3, Foot4 } from '../src/Footer';
import Language from '../Components/toolbox/language';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  addEmailToLocal,
  deleteEmailFromLocal,
  getEmailFromLocal,
} from '../LocalStorage/emailStorage';
import { getLoginStateFromLocal } from '../LocalStorage/loginStateStorage';
import {
  addRegistrationPhaseToLocal,
  getRegistrationPhaseFromLocal,
} from '../LocalStorage/registrationPhase';

class IndexComponent extends Component {
  state = {
    loading: false,
    loginState: false,
  };

  async componentDidMount() {
    const loginState = getLoginStateFromLocal()[0];

    if (loginState) {
      this.setState({ loginState: loginState });
    }
  }

  emailForm = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      await this.props.registrationPhaseState({
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

    if (this.props.data) {
      var email = await getEmailFromLocal()[0];

      if (email) {
        await deleteEmailFromLocal();
      }
      await addRegistrationPhaseToLocal('/registration');

      await addEmailToLocal(this.props.email);

      setTimeout(() => {
        this.props.router.push(
          `/signup/${this.props.data.registrationPhaseState.registrationPhaseRoute}`
        );
      }, 2000);
    }
  };

  registrationPhase = async () => {
    const registrationPhase = await getRegistrationPhaseFromLocal()[0];

    this.props.router.push(`/signup${registrationPhase}`);
  };

  render() {
    const { isOpen, onToggle, setIconState, iconState, setEmail, email } =
      this.props;
    return (
      <Box
        bgImage="https://xbox-store-checker.com/assets/upload/game/2019/02/optimize/9wzdncrfj3tj-background.jpg"
        w="1349px"
        h="706.98px"
        bgAttachment="scroll"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <HomeHeader />
        <Container maxW="container.sm" color="white" mt={10} pt={20}>
          <Heading size="2xl" textAlign="center" pl={10} pr={10} mb={6}>
            Unlimited movies, TV shows, and more.
          </Heading>
          <Text fontSize="2xl" textAlign="center" mb={6}>
            Watch anywhere. Cancel anytime.
          </Text>

          {this.state.loginState ? (
            <Flex justify="center" align="center" direction="column">
              <Button
                size="lg"
                h="50px"
                borderRadius="none"
                isLoading={this.state.loading ? true : false}
                colorScheme="red"
                onClick={this.registrationPhase}
                style={{ backgroundColor: '#f40612' }}
                type="submit"
              >
                Finish Sign Up
              </Button>
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              direction="column"
              as="form"
              onSubmit={this.emailForm}
            >
              <Text fontSize="lg" textAlign="center" mb={6}>
                Ready to watch? Enter your email to create or restart your
                membership.
              </Text>
              <div className="input-group mb-3">
                <Input
                  h="50px"
                  type="email"
                  borderRadius="none"
                  value={email}
                  className="form-control"
                  placeholder="Email address"
                  _placeholder={{ fontSize: '14px' }}
                  _active={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  variant="filled"
                  isRequired
                  size="lg"
                />

                <Button
                  size="lg"
                  h="50px"
                  borderRadius="none"
                  isLoading={this.state.loading ? true : false}
                  colorScheme="red"
                  style={{ backgroundColor: '#f40612' }}
                  type="submit"
                >
                  Get Started
                </Button>
              </div>
            </Flex>
          )}
        </Container>
        <Box
          h="473.92px"
          w="1349px"
          bgColor="black"
          color="white"
          mt="190px"
          borderTop="#222 solid 8px"
          borderBottom="#222 solid 8px"
        >
          <Flex justify="space-around" align="center" p={3}>
            <Box w="40%" p={4}>
              <Heading p={4} size="2xl">
                Enjoy on your TV.
              </Heading>
              <Text p={4} fontSize="2xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </Text>
            </Box>
            <Box p={4}>
              <Image
                src="/tv.png"
                width="530.19px"
                height="397.64px"
                alt="TV"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          h="430.13px"
          w="1349px"
          bgColor="black"
          color="white"
          borderBottom="#222 solid 8px"
        >
          <Flex justify="space-around" align="center" p={3}>
            <Box p={4}>
              <Image
                src="/mobile-0819.jpg"
                width="504.95px"
                height="378.7px"
                alt="Mobile"
              />
            </Box>
            <Box w="50%" p={4}>
              <Heading p={4} size="2xl" lineHeight="normal">
                Download your shows to watch offline.
              </Heading>
              <Text p={4} fontSize="2xl">
                Save your favorites easily and always have something to watch.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          h="543.34px"
          w="1349px"
          bgColor="black"
          color="white"
          borderBottom="#222 solid 8px"
        >
          <Flex justify="space-around" align="center" p={3}>
            <Box w="40%" p={5}>
              <Heading p={4} size="2xl">
                Watch everywhere.
              </Heading>
              <Text p={4} fontSize="2xl">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </Text>
            </Box>
            <Box p={5}>
              <Image
                src="/device-pile.png"
                width="555.44px"
                height="416.58px"
                alt="Device pile"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          h="530.7px"
          w="1349px"
          bgColor="black"
          color="white"
          borderBottom="#222 solid 8px"
        >
          <Flex justify="space-around" align="center" p={5}>
            <Box p={0}>
              <Image
                src="/kids.png"
                width="504.95px"
                height="378.7px"
                alt="Kids"
              />
            </Box>
            <Box w="40.2%" p={0}>
              <Heading pt={4} pb={4} size="2xl">
                Create profiles for kids.
              </Heading>
              <Text pt={4} pb={4} fontSize="2xl" pr={10}>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          h="auto"
          w="1349px"
          bgColor="black"
          color="white"
          borderBottom="#222 solid 8px"
          pt="50px"
          pl="20px"
          pr="20px"
          pb="50px"
        >
          <Flex justify="space-between" align="center" direction="column" p={5}>
            <Heading size="2xl">Frequently Asked Questions</Heading>
            <Flex justify="center" m={10} align="center" direction="column">
              {Questions.map((question, i) => (
                <Flex
                  justify="center"
                  key={i}
                  align="center"
                  direction="column"
                >
                  <Flex
                    align="center"
                    justify="space-between"
                    cursor="pointer"
                    onClick={onToggle(i)}
                    w="815px"
                    h="72.59px"
                    bgColor="#303030"
                    borderRadius="md"
                    m={2}
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      onClick={() => setIconState(i)}
                      w="100%"
                      p={4}
                      h="100%"
                    >
                      <Heading size="md" p="24px" fontFamily="monospace">
                        {question.title}
                      </Heading>
                      <Box p="24px">
                        {' '}
                        {iconState(i) ? (
                          <AddIcon w="22px" h="22px" />
                        ) : (
                          <CloseIcon w="22px" h="22px" />
                        )}
                      </Box>
                    </Flex>
                  </Flex>
                  <Collapse in={isOpen(i)} animateOpacity>
                    <Box
                      p="40px"
                      color="white"
                      w="815px"
                      bgColor="#303030"
                      rounded="md"
                      shadow="md"
                    >
                      <Text fontSize="xl">{question.description1}</Text>
                      {question.description2 ? (
                        <Text fontSize="xl" mt={7}>
                          {question.description2}
                        </Text>
                      ) : null}
                    </Box>
                  </Collapse>
                </Flex>
              ))}
            </Flex>

            <Flex justify="center" align="center" direction="column" p={6}>
              <Text fontSize="lg" textAlign="center" mb={6}>
                Ready to watch? Enter your email to create or restart your
                membership.
              </Text>
              <div className="input-group mb-3">
                <Input
                  h="50px"
                  type="email"
                  borderRadius="none"
                  className="form-control"
                  placeholder="Email address"
                  _placeholder={{ fontSize: '14px' }}
                  _active={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  variant="filled"
                  size="lg"
                />

                <Button
                  size="lg"
                  h="50px"
                  borderRadius="none"
                  colorScheme="red"
                  style={{ backgroundColor: '#f40612' }}
                  type="button"
                >
                  Get Started
                </Button>
              </div>
            </Flex>
          </Flex>
        </Box>
        <Box w="1349px" bgColor="black" color="#757575">
          <Flex align="center" direction="column">
            <Container maxW="container.lg" p="70px">
              <Text fontSize="md" mb={5}>
                Questions? Call 0850-390-7444
              </Text>
              <Flex justify="space-between" align="center" mt={10}>
                <Box>
                  {Foot1.map((f, i) => (
                    <Text fontSize="sm" key={i} mb={1}>
                      {f}
                    </Text>
                  ))}
                </Box>
                <Box>
                  {Foot2.map((f, i) => (
                    <Text fontSize="sm" key={i} mb={1}>
                      {f}
                    </Text>
                  ))}
                </Box>
                <Box>
                  {Foot3.map((f, i) => (
                    <Text fontSize="sm" key={i} mb={1}>
                      {f}
                    </Text>
                  ))}
                </Box>
                <Box>
                  {Foot4.map((f, i) => (
                    <Text fontSize="sm" key={i} mb={1}>
                      {f}
                    </Text>
                  ))}
                </Box>
              </Flex>
              <Flex mt={7}>
                <Language />
              </Flex>
              <Text fontSize="sm" mt={5}>
                Netflix Turkey
              </Text>
            </Container>
          </Flex>
        </Box>
      </Box>
    );
  }
}
export default IndexComponent;
