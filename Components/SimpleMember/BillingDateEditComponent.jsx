import React, { Component } from 'react';
import { Box, Container, Text, Flex, Select, Button } from '@chakra-ui/react';
import Header from '../signup/Header';
import Footer from './Footer';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

class BillingDateEditComponent extends Component {
  state = {
    days: [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '14th',
      '15th',
      '16th',
      '17th',
      '18th',
      '19th',
      '20th',
      '21st',
      '22nd',
      '23rd',
      '24rd',
      '25rd',
      '26rd',
      '27rd',
    ],
  };

  changeBillingDate = async (e) => {
    e.preventDefault();

    const email = await getEmailFromLocal()[0];

    try {
      await this.props.changeBillingDateThatUser({
        variables: {
          email: email,
          billingDate: this.props.day,
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

    if (this.props.changeBillingDateThatUserData) {
      if (
        this.props.changeBillingDateThatUserData.changeBillingDateThatUser
          .success
      ) {
        await this.props.router.push('/YourAccount');
      }
    }
  };

  render() {
    const { days } = this.state;
    const { day, setDay, getBillingDateFromUserData } = this.props;

    return (
      <Box>
        <Header />
        <Container maxW="container.sm" mr="280px" mt={3} mb="200px">
          <Box w="420px" as="form" onSubmit={this.changeBillingDate}>
            <Text fontSize="2xl" color="#333" fontWeight="semibold">
              Choose a new billing day.
            </Text>
            <Text fontSize="md" color="#333" mt={3} lineHeight="1.2">
              Right now, your membership is billed on the{' '}
              <strong className="font-semibold">
                {getBillingDateFromUserData.getBillingDateFromUser.billingDate}{' '}
                of each month
              </strong>
              , but feel free to change it to a day that’s more convenient for
              you.
            </Text>
            <Box mt={4}>
              <Text fontSize="xs" fontWeight="semibold" color="#757575">
                Your new billing day
              </Text>

              <Flex align="center" mt={1}>
                <Box>
                  <Select
                    h="60px"
                    w="195px"
                    placeholder="Day"
                    borderColor="#a6a6a6"
                    _hover={{ borderColor: '#a6a6a6' }}
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    _active={{ borderColor: '#333' }}
                    _focus={{ borderColor: '#333' }}
                    size="xs"
                  >
                    {days.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Text ml={4} fontSize="md" color="#333">
                  of each month
                </Text>
              </Flex>
            </Box>
            <Button
              w="420px"
              h="48px"
              disabled={day == '' ? true : false}
              type="submit"
              colorScheme="red"
              bgColor="#e50914"
              borderRadius="sm"
              mt={7}
              _hover={{ bgColor: '#e50900', ring: '0px' }}
              _active={{ bgColor: '#e50900', ring: '0px' }}
              _focus={{ bgColor: '#e50900', ring: '0px' }}
            >
              REVIEW & CONFIRM
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    );
  }
}

export default BillingDateEditComponent;
