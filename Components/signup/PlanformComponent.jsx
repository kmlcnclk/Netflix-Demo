import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CheckIcon } from '@chakra-ui/icons';
import { Container, Flex, Box, Button, Text, Heading } from '@chakra-ui/react';
import {
  addPlanToLocal,
  deletePlanFromLocal,
  getPlanFromLocal,
} from '../../LocalStorage/planformStorage';
import {
  addRegistrationPhaseToLocal,
  deleteRegistrationPhaseFromLocal,
} from '../../LocalStorage/registrationPhase';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

class PlanformComponent extends Component {
  state = {
    loading: false,
  };

  planForm = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const email = await getEmailFromLocal()[0];

    try {
      await this.props.postPlanToUser({
        variables: {
          email: email,
          plan: this.props.product,
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

    if (this.props.postPlanToUserData) {
      if (this.props.postPlanToUserData.postPlanToUser.success) {
        const plan = await getPlanFromLocal()[0];

        if (plan) {
          await deletePlanFromLocal();

          await addPlanToLocal(this.props.product);

          setTimeout(() => {
            this.props.router.push('/signup/payment');
          }, 2000);
        } else {
          await addPlanToLocal(this.props.product);

          await deleteRegistrationPhaseFromLocal();

          await addRegistrationPhaseToLocal('/payment');

          setTimeout(() => {
            this.props.router.push('/signup/payment');
          }, 2000);
        }
      }
    }
  };

  render() {
    const {
      basic,
      standard,
      premium,
      basicBG,
      standardBG,
      premiumBG,
      product,
      basicC,
      standardC,
      premiumC,
    } = this.props;
    return (
      <Box>
        <Header />
        <Box w="full" borderBottom="1px #e3e3e3 solid">
          <Container maxW="5xl" w="978px" pt="30px" pb="60px">
            <Text as="span" mb={2} mt={2} fontSize="lg">
              STEP <strong>2</strong> OF <strong>3</strong>
            </Text>
            <Heading size="lg" mb={2} mt={2}>
              Choose a plan. You can always change or cancel.
            </Heading>{' '}
            <Box mt={3} mb={3}>
              <Flex align="center">
                <CheckIcon w="22px" h="22px" color="red" />
                <Text ml={2} fontSize="lg" lineHeight="tall">
                  Watch all you want. Ad-free.
                </Text>
              </Flex>
              <Flex align="center">
                <CheckIcon w="22px" h="22px" color="red" />
                <Text ml={2} fontSize="lg" lineHeight="tall">
                  Recommendations just for you.
                </Text>
              </Flex>
              <Flex align="center">
                <CheckIcon w="22px" h="22px" color="red" />
                <Text ml={2} fontSize="lg" lineHeight="tall">
                  Change or cancel your plan anytime.
                </Text>
              </Flex>
            </Box>
            <Flex justify="flex-end" align="center" mt={5}>
              <Flex
                m={6}
                justify="center"
                color="white"
                align="center"
                bgColor={basicBG}
                w="120px"
                fontWeight="semibold"
                h="120px"
                onClick={basic}
              >
                <Text fontSize="lg">Basic</Text>
              </Flex>
              <Flex
                m={6}
                justify="center"
                color="white"
                align="center"
                bgColor={standardBG}
                w="120px"
                fontWeight="semibold"
                h="120px"
                onClick={standard}
              >
                <Text fontSize="lg">Standard</Text>
              </Flex>
              <Flex
                m={6}
                justify="center"
                color="white"
                align="center"
                bgColor={premiumBG}
                w="120px"
                fontWeight="semibold"
                h="120px"
                onClick={premium}
              >
                <Text fontSize="lg">Premium</Text>
              </Flex>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              fontWeight="semibold"
              borderBottom="solid 1px #cccccc"
              p={2}
              pb={6}
            >
              <Text color="#333333" w="40%">
                Monthly price
              </Text>
              <Text color={basicC} ml={4} onClick={basic}>
                26.99 TL
              </Text>
              <Text color={standardC} onClick={standard}>
                40.99 TL
              </Text>
              <Text color={premiumC} mr={10} onClick={premium}>
                54.99 TL
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              fontWeight="semibold"
              borderBottom="solid 1px #cccccc"
              p={2}
              pt={6}
              pb={6}
            >
              <Text color="#333333" w="40%">
                Video quality
              </Text>
              <Text color={basicC} ml={2} onClick={basic} h="full">
                Good
              </Text>
              <Text color={standardC} mr={2} onClick={standard}>
                Better
              </Text>
              <Text color={premiumC} mr={14} onClick={premium}>
                Best
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              fontWeight="semibold"
              borderBottom="solid 1px #cccccc"
              p={2}
              pt={6}
              pb={6}
            >
              <Text color="#333333" w="40%">
                Resolution
              </Text>
              <Text color={basicC} ml={4} onClick={basic}>
                480p
              </Text>
              <Text color={standardC} onClick={standard}>
                1080p
              </Text>
              <Text color={premiumC} mr={10} onClick={premium}>
                4K+HDR
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              fontWeight="semibold"
              p={2}
              pt={6}
              pb={6}
            >
              <Text color="#333333" w="40%">
                Watch on your TV, computer, mobile phone and tablet
              </Text>
              <Text color={basicC} onClick={basic}>
                <CheckIcon w="22px" h="22px" />
              </Text>
              <Text color={standardC} onClick={standard}>
                <CheckIcon w="22px" h="22px" />
              </Text>
              <Text color={premiumC} mr={14} onClick={premium}>
                <CheckIcon w="22px" h="22px" />
              </Text>
            </Flex>
            <Box as="span">
              <Text m={2} fontSize="smaller" color="#737373">
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our{' '}
                <Box
                  d="inline-block"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                  color="#0071eb"
                >
                  Terms of Use
                </Box>{' '}
                for more details.
              </Text>
              <Text m={2} fontSize="smaller" color="#737373">
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with Standard
                and 1 with Basic.
              </Text>
            </Box>{' '}
            <Flex
              as="form"
              justify="center"
              align="center"
              direction="column"
              onSubmit={this.planForm}
              mt="20px"
            >
              <Button
                colorScheme="red"
                type="submit"
                bgColor="#e50914"
                isLoading={this.state.loading ? true : false}
                _hover={{ bgColor: '#f6121D' }}
                _active={{ bgColor: '#e50914' }}
                size="lg"
                w="440px"
                h="64px"
                mt={3}
              >
                <Text fontSize="24px">Next</Text>
              </Button>
            </Flex>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }
}
export default PlanformComponent;
