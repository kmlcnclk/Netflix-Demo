import React, { Component } from 'react';
import {
  Box,
  Container,
  Checkbox,
  Heading,
  Text,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getPlanFromLocal } from '../../LocalStorage/planformStorage';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

class CreditOptionComponent extends Component {
  state = {
    plan: '',
    planPrice: '',
    loading: false,
  };

  async componentDidMount() {
    const plan = await getPlanFromLocal()[0];
    await this.setState({ plan: plan });

    if (this.state.plan == 'Basic') {
      await this.setState({ planPrice: '26.99 TL' });
    } else if (this.state.plan == 'Standard') {
      await this.setState({ planPrice: '40.99 TL' });
    } else if (this.state.plan == 'Premium') {
      await this.setState({ planPrice: '54.99 TL' });
    }
  }

  creditoption = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const email = await getEmailFromLocal()[0];

    try {
      await this.props.creditOptionAddToUser({
        variables: {
          email: email,
          fName: this.props.fName,
          lName: this.props.lName,
          cardNumber: this.props.cardNumber,
          cardExpiry: this.props.cardExpiry,
          cardCVV: this.props.cardCVV,
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
      console.log(this.props.data.creditOptionAddToUser.success);
    }
  };

  render() {
    const { setFName, setLName, setCardNumber, setCardExpiry, setCardCVV } =
      this.props;
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container
            maxW="container.sm"
            p="10px"
            pl="98px"
            pr="98px"
            pb="140px"
          >
            <Box mt="20px" color="rgb(51, 51, 51)">
              <Text as="span" m={2} fontSize="lg">
                STEP <strong>3</strong> OF <strong>3</strong>
              </Text>
              <Heading m={2} size="lg">
                Set up your credit or debit card
              </Heading>
              <Box m={2} mt={5} mb={0}>
                <Flex align="center">
                  <Flex align="center">
                    <Image
                      src="/visa-v3.svg"
                      width="40px"
                      height="25px"
                      objectFit="contain"
                      alt="Visa"
                    />
                  </Flex>
                  <Flex align="center" pl={1}>
                    <Image
                      src="/mastercard-v2.svg"
                      width="40px"
                      height="25px"
                      objectFit="contain"
                      alt="Master Card"
                    />
                  </Flex>
                  <Flex align="center" pl={1}>
                    <Image
                      src="/amex-v2.svg"
                      width="40px"
                      height="25px"
                      objectFit="contain"
                      alt="American Express"
                    />
                  </Flex>
                  <Flex align="center" pl={1}>
                    <Image
                      src="/icon_troy.png"
                      width="40px"
                      height="25px"
                      objectFit="contain"
                      alt="Troy"
                    />
                  </Flex>
                </Flex>
              </Box>
              <Flex
                as="form"
                m={2}
                mt={0}
                onSubmit={this.creditoption}
                justify="flex-start"
                align="center"
                direction="column"
              >
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  mt={3}
                  name="first name"
                  borderRadius="none"
                  placeholder="First Name"
                  _placeholder={{ fontSize: '14px' }}
                  onChange={(e) => setFName(e.target.value)}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  name="last name"
                  borderRadius="none"
                  placeholder="Last Name"
                  _placeholder={{ fontSize: '14px' }}
                  onChange={(e) => setLName(e.target.value)}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  name="card number"
                  borderRadius="none"
                  placeholder="Card Number"
                  _placeholder={{ fontSize: '14px' }}
                  onChange={(e) => setCardNumber(e.target.value)}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  maxLength={19}
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  name="date"
                  borderRadius="none"
                  placeholder="Expiration date (MM/YY)"
                  _placeholder={{ fontSize: '14px' }}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  isRequired
                  bgColor="white"
                  size="lg"
                  mb={3}
                />
                <Input
                  type="text"
                  h="60px"
                  ml={2}
                  mr={2}
                  name="security code"
                  borderRadius="none"
                  placeholder="Security code (CVV)"
                  _placeholder={{ fontSize: '14px' }}
                  onChange={(e) => setCardCVV(e.target.value)}
                  _active={{ bgColor: 'white' }}
                  _hover={{ bgColor: 'white' }}
                  _focus={{ bgColor: 'white' }}
                  errorBorderColor="red"
                  border="black 1px solid"
                  borderColor={'#8c8c8c'}
                  isRequired
                  bgColor="white"
                  size="lg"
                  maxLength={4}
                  mb={3}
                />
                <Flex
                  justify="space-between"
                  align="center"
                  w="full"
                  h="72px"
                  bgColor="#f4f4f4"
                  borderRadius="5px"
                >
                  <Box p={2} pl={5} pr={5}>
                    {this.state.plan == 'Basic' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        26.99TL/month
                      </Text>
                    ) : null}
                    {this.state.plan == 'Standard' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        40.99TL/month
                      </Text>
                    ) : null}
                    {this.state.plan == 'Premium' ? (
                      <Text color="#333333" fontSize="lg" fontWeight="semibold">
                        54.99TL/month
                      </Text>
                    ) : null}

                    <Text color="#73737f" fontSize="md" fontWeight="">
                      {this.state.plan} Plan
                    </Text>
                  </Box>
                  <Link href="/signup/planform">
                    <a>
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        cursor="pointer"
                        p={2}
                        pl={4}
                        pr={4}
                        color="#1871eb"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Change
                      </Text>
                    </a>
                  </Link>
                </Flex>
                <Box m={2}>
                  <Text fontSize="sm" w="auto" color="#73737f">
                    Your payments will be processed internationally. Additional
                    bank fees may apply.
                  </Text>{' '}
                  <Box mt={6} color="#73737f">
                    <Text fontSize="sm">
                      By checking the checkbox below, you agree to our
                      <Link href="https://help.netflix.com/legal/termsofuse">
                        <a
                          style={{
                            color: '#1871eb',
                            textDecoration: 'underline',
                          }}
                          target="_blank"
                        >
                          Terms of Use
                        </a>
                      </Link>
                      ,{' '}
                      <Link href="https://help.netflix.com/legal/privacy">
                        <a
                          style={{
                            color: '#1871eb',
                            textDecoration: 'underline',
                          }}
                          target="_blank"
                        >
                          Privacy Statement
                        </a>
                      </Link>
                      , and that you are over 18. Netflix will automatically
                      continue your membership and charge the monthly membership
                      fee (currently {this.state.planPrice}) to your payment
                      method until you cancel. You may cancel at any time to
                      avoid future charges.
                    </Text>
                  </Box>
                </Box>
                <Flex w="full" m={2}>
                  <Checkbox isRequired size="lg" color="#73737f">
                    I agree
                  </Checkbox>
                </Flex>

                <Button
                  colorScheme="red"
                  type="submit"
                  bgColor="#e50914"
                  _hover={{ bgColor: '#f6121D' }}
                  isLoading={this.state.loading ? true : false}
                  _active={{ bgColor: '#e50914' }}
                  size="lg"
                  w="full"
                  h="64px"
                  mt={3}
                >
                  <Text fontSize="24px">Start Membership</Text>
                </Button>
              </Flex>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default CreditOptionComponent;
