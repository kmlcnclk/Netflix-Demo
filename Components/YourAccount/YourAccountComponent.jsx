import React, { Component } from 'react';
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  Image,
  Collapse,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

class YourAccountComponent extends Component {
  render() {
    const {
      data,
      email,
      getUserFromIDData,
      onToggle1,
      onToggle2,
      onToggle3,
      onToggle4,
      onToggleChild,
      isOpen1,
      isOpen2,
      isOpen3,
      isOpen4,
      isOpenChild,
      clickProfileIndex,
    } = this.props;

    return (
      <Container maxW="container.lg" p={3} pt="30px" pb="85px" as="form">
        <Flex align="center" w="full" borderBottom="1px #999999 solid" pb={4}>
          <Text fontSize="4xl" mr={4} color="#333333">
            Account
          </Text>
          <NextImage
            src="/firstDateOfSubscription.svg"
            alt="First Date Of Subscription Image"
            width="26px"
            height="26px"
            objectFit="contain"
          />
          <Text fontSize="xs" ml={2} color="#555555" fontWeight="bold">
            MEMBER SINCE MARCH 2020
          </Text>
        </Flex>
        <Flex pt={3} borderBottom="1px #999999 solid" pb={4}>
          <Box w="27%">
            <Text fontSize="xl" color="#757575">
              MEMBERSHIP & BILLING
            </Text>

            <Button
              type="button"
              h="37px"
              w="200px"
              mt={3}
              colorScheme="whiteAlpha"
              className="shadow-sm"
              bgColor="#e6e6e6"
              color="black"
              _hover={{ bgColor: '#e6e6e6' }}
              _active={{ ring: '0' }}
              _focus={{ ring: '0' }}
              px={5}
              rounded="xs"
            >
              <Text fontSize="sm" fontWeight="normal">
                Cancel Membership
              </Text>
            </Button>
          </Box>

          <Box w="73%">
            <Flex
              justify="space-between"
              className="border-b border-gray-300 border-opacity-60"
              pb={2}
            >
              <Box>
                <Text fontSize="lg" color="#333333" fontWeight="semibold">
                  {email}
                </Text>
                <Text fontSize="lg" color="#333333" opacity="0.7">
                  Pasword: ********
                </Text>
                <Text fontSize="lg" color="#333333" opacity="0.7">
                  Phone: {getUserFromIDData.getUserFromID.user.phoneNumber}
                </Text>
              </Box>
              <Box color="#0073e6">
                <Link href="/email" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Change account email
                    </Text>
                  </a>
                </Link>
                <Link href="/password" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Change Password
                    </Text>
                  </a>
                </Link>
                <Link href="/phonenumber" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Change Phone Number
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
            <Flex
              justify="space-between"
              className="border-b border-gray-300 border-opacity-60"
              pt={2}
              pb={2}
            >
              {/* burada yapacakların var */}
              <Box>
                <Flex align="center">
                  <Image
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                    alt="Cart Image"
                    w="32px"
                    h="20px"
                    objectFit="contain"
                  />
                  {getUserFromIDData.getUserFromID.user.creditCards.map(
                    (c, i) => {
                      if (c.state) {
                        return (
                          <Text key={i} ml={2} fontSize="md" fontWeight="bold">
                            •••• •••• •••• {c.cardNumber.slice(12)}
                          </Text>
                        );
                      }
                    }
                  )}
                </Flex>

                <Box>Your next billing date is September 29, 2021.</Box>
              </Box>
              <Box color="#0073e6">
                <Link href="/simplemember/managepaymentinfo" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Manage payment info
                    </Text>
                  </a>
                </Link>
                <Link href="/BillingActivity" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Billing details
                    </Text>
                  </a>
                </Link>
                <Link href="/simplemember/billingdateedit" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Change billing day
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
            <Flex justify="flex-end" pt={2} pb={2}>
              <Box color="#0073e6">
                <Link href="/redeem" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Redeem gift card or promo code
                    </Text>
                  </a>
                </Link>
                <Link href="/gift-cards" passHref>
                  <a>
                    <Text
                      _hover={{ textDecoration: 'underline' }}
                      _active={{ textDecoration: 'underline' }}
                      textAlign="right"
                    >
                      Where to buy gift cards
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex pt={2} borderBottom="1px #999999 solid" pb={7} align="center">
          <Box w="27%">
            <Text fontSize="xl" color="#757575">
              PLAN DETAILS
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="73%">
            <Text fontSize="md" color="#333" fontWeight="bold">
              {getUserFromIDData.getUserFromID.user.plan}
            </Text>
            <Box color="#0073e6">
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                    textAlign="right"
                  >
                    Change plan
                  </Text>
                </a>
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex pt={3} borderBottom="1px #999999 solid" pb={3}>
          <Box w="27%">
            <Text fontSize="xl" color="#757575">
              SETTINGS
            </Text>
          </Box>
          <Flex align="center" justify="flex-start" w="73%">
            <Box color="#0073e6">
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    18+ Content PIN
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Test participation
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Manage download devices
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Activate a device
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Recent device streaming activity
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Sign out of all devices
                  </Text>
                </a>
              </Link>
              <Link href="/ChangePlan" passHref>
                <a>
                  <Text
                    _hover={{ textDecoration: 'underline' }}
                    _active={{ textDecoration: 'underline' }}
                  >
                    Download your personal information
                  </Text>
                </a>
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex pt={3} pb={3}>
          <Box w="27%">
            <Text fontSize="xl" color="#757575">
              PROFILE & PARENTAL CONTROLS
            </Text>
          </Box>
          <Box w="73%">
            {getUserFromIDData.getUserFromID.profiles[0] ? (
              <Box>
                {/* diğerlerine ekle */}
                <Flex
                  align="center"
                  justify="space-between"
                  pr={2}
                  cursor="pointer"
                  onClick={onToggle1}
                  pb={3}
                  borderBottom="1px #ccc solid"
                >
                  <Flex align="center">
                    <Image
                      src={
                        getUserFromIDData.getUserFromID.profiles[0]
                          .profileImageUrl
                      }
                      alt={
                        getUserFromIDData.getUserFromID.profiles[0].profileName
                      }
                      borderRadius="md"
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />
                    <Box ml={5}>
                      <Text fontSize="md" fontWeight="bold" color="#333">
                        {
                          getUserFromIDData.getUserFromID.profiles[0]
                            .profileName
                        }
                      </Text>

                      <Text
                        fontSize="xs"
                        className="capitalize"
                        color="#787878"
                      >
                        {
                          getUserFromIDData.getUserFromID.profiles[0]
                            .maturitySettings.ageLimit
                        }
                      </Text>
                    </Box>
                  </Flex>

                  {isOpen1 ? (
                    <IoIosArrowUp size="28px" color="#aaaaaa" />
                  ) : (
                    <IoIosArrowDown size="28px" color="#aaaaaa" />
                  )}
                </Flex>
                <Collapse in={isOpen1} animateOpacity>
                  <Box pl="84px" w="full" borderBottom="1px #ccc solid">
                    {clickProfileIndex == '0' ? (
                      <Box>
                        {getUserFromIDData.getUserFromID.profiles[0]
                          .profileLock == 'On' ? (
                          <Link href="" passHref>
                            <a className="flex justify-between items-center w-full">
                              <Flex
                                justify="space-between"
                                align="center"
                                py={6}
                                cursor="pointer"
                                w="full"
                                borderBottom="1px #ccc solid"
                                color="#0073E6"
                              >
                                <Box>
                                  <Text fontSize="md" color="#333">
                                    Profile Email
                                  </Text>
                                </Box>
                                <Box _hover={{ textDecoration: 'underline' }}>
                                  <Text fontSize="sm">Add</Text>
                                </Box>
                              </Flex>
                            </a>
                          </Link>
                        ) : null}
                      </Box>
                    ) : null}

                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Language
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[0]
                                  .language
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing Restrictions
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {/* {
                                    getUserFromIDData.getUserFromID.profiles[0]
                                      .language
                                  } */}
                              {/* bak buna anam */}
                              No Restrictions.
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Profile Lock
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[0]
                                  .profileLock
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing activity
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Ratings
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Subtitle appearance
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Playback settings
                            </Text>

                            {/* db ye bu alanı ekle dataUsagePerScreen */}
                            <Text fontSize="xs" color="#787878">
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.autoplayNextEpisode
                                ? 'Autoplay episode.'
                                : 'Do not autoplay next episode.'}
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.previews
                                ? ' Autoplay previews.'
                                : ' Do not autoplay previews.'}
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.dataUsagePerScreen == 'Auto'
                                ? ' Default video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.dataUsagePerScreen == 'Low'
                                ? ' Basic video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.dataUsagePerScreen == 'Medium'
                                ? ' Standard video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[0]
                                .autoplayControls.dataUsagePerScreen == 'High'
                                ? ' Best video and audio quality.'
                                : null}
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
            ) : null}
            {getUserFromIDData.getUserFromID.profiles[1] ? (
              <Box>
                <Flex
                  align="center"
                  justify="space-between"
                  pr={2}
                  cursor="pointer"
                  onClick={onToggle2}
                  py={3}
                  borderBottom="1px #ccc solid"
                >
                  <Flex align="center">
                    <Image
                      src={
                        getUserFromIDData.getUserFromID.profiles[1]
                          .profileImageUrl
                      }
                      alt={
                        getUserFromIDData.getUserFromID.profiles[1].profileName
                      }
                      borderRadius="md"
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />
                    <Box ml={5}>
                      <Text fontSize="md" fontWeight="bold" color="#333">
                        {
                          getUserFromIDData.getUserFromID.profiles[1]
                            .profileName
                        }
                      </Text>

                      <Text
                        fontSize="xs"
                        className="capitalize"
                        color="#787878"
                      >
                        {
                          getUserFromIDData.getUserFromID.profiles[1]
                            .maturitySettings.ageLimit
                        }
                      </Text>
                    </Box>
                  </Flex>

                  {isOpen2 ? (
                    <IoIosArrowUp size="28px" color="#aaaaaa" />
                  ) : (
                    <IoIosArrowDown size="28px" color="#aaaaaa" />
                  )}
                </Flex>
                <Collapse in={isOpen2} animateOpacity>
                  <Box pl="84px" w="full" borderBottom="1px #ccc solid">
                    {clickProfileIndex == '1' ? (
                      <Box>
                        {getUserFromIDData.getUserFromID.profiles[1]
                          .profileLock == 'On' ? (
                          <Link href="" passHref>
                            <a className="flex justify-between items-center w-full">
                              <Flex
                                justify="space-between"
                                align="center"
                                py={6}
                                cursor="pointer"
                                w="full"
                                borderBottom="1px #ccc solid"
                                color="#0073E6"
                              >
                                <Box>
                                  <Text fontSize="md" color="#333">
                                    Profile Email
                                  </Text>
                                </Box>
                                <Box _hover={{ textDecoration: 'underline' }}>
                                  <Text fontSize="sm">Add</Text>
                                </Box>
                              </Flex>
                            </a>
                          </Link>
                        ) : null}
                      </Box>
                    ) : null}

                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Language
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[1]
                                  .language
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing Restrictions
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {/* {
                                    getUserFromIDData.getUserFromID.profiles[1]
                                      .language
                                  } */}
                              {/* bak buna anam */}
                              No Restrictions.
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Profile Lock
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[1]
                                  .profileLock
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing activity
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Ratings
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Subtitle appearance
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Playback settings
                            </Text>

                            {/* db ye bu alanı ekle dataUsagePerScreen */}
                            <Text fontSize="xs" color="#787878">
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.autoplayNextEpisode
                                ? 'Autoplay episode.'
                                : 'Do not autoplay next episode.'}
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.previews
                                ? ' Autoplay previews.'
                                : ' Do not autoplay previews.'}
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.dataUsagePerScreen == 'Auto'
                                ? ' Default video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.dataUsagePerScreen == 'Low'
                                ? ' Basic video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.dataUsagePerScreen == 'Medium'
                                ? ' Standard video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[1]
                                .autoplayControls.dataUsagePerScreen == 'High'
                                ? ' Best video and audio quality.'
                                : null}
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
            ) : null}
            {getUserFromIDData.getUserFromID.profiles[2] ? (
              <Box>
                <Flex
                  align="center"
                  justify="space-between"
                  pr={2}
                  cursor="pointer"
                  onClick={onToggle3}
                  py={3}
                  borderBottom="1px #ccc solid"
                >
                  <Flex align="center">
                    <Image
                      src={
                        getUserFromIDData.getUserFromID.profiles[2]
                          .profileImageUrl
                      }
                      alt={
                        getUserFromIDData.getUserFromID.profiles[2].profileName
                      }
                      borderRadius="md"
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />
                    <Box ml={5}>
                      <Text fontSize="md" fontWeight="bold" color="#333">
                        {
                          getUserFromIDData.getUserFromID.profiles[2]
                            .profileName
                        }
                      </Text>

                      <Text
                        fontSize="xs"
                        className="capitalize"
                        color="#787878"
                      >
                        {
                          getUserFromIDData.getUserFromID.profiles[2]
                            .maturitySettings.ageLimit
                        }
                      </Text>
                    </Box>
                  </Flex>

                  {isOpen3 ? (
                    <IoIosArrowUp size="28px" color="#aaaaaa" />
                  ) : (
                    <IoIosArrowDown size="28px" color="#aaaaaa" />
                  )}
                </Flex>
                <Collapse in={isOpen1} animateOpacity>
                  <Box pl="84px" w="full" borderBottom="1px #ccc solid">
                    {clickProfileIndex == '2' ? (
                      <Box>
                        {getUserFromIDData.getUserFromID.profiles[2]
                          .profileLock == 'On' ? (
                          <Link href="" passHref>
                            <a className="flex justify-between items-center w-full">
                              <Flex
                                justify="space-between"
                                align="center"
                                py={6}
                                cursor="pointer"
                                w="full"
                                borderBottom="1px #ccc solid"
                                color="#0073E6"
                              >
                                <Box>
                                  <Text fontSize="md" color="#333">
                                    Profile Email
                                  </Text>
                                </Box>
                                <Box _hover={{ textDecoration: 'underline' }}>
                                  <Text fontSize="sm">Add</Text>
                                </Box>
                              </Flex>
                            </a>
                          </Link>
                        ) : null}
                      </Box>
                    ) : null}

                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Language
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[2]
                                  .language
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing Restrictions
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {/* {
                                    getUserFromIDData.getUserFromID.profiles[2]
                                      .language
                                  } */}
                              {/* bak buna anam */}
                              No Restrictions.
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Profile Lock
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[2]
                                  .profileLock
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing activity
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Ratings
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Subtitle appearance
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Playback settings
                            </Text>

                            {/* db ye bu alanı ekle dataUsagePerScreen */}
                            <Text fontSize="xs" color="#787878">
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.autoplayNextEpisode
                                ? 'Autoplay episode.'
                                : 'Do not autoplay next episode.'}
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.previews
                                ? ' Autoplay previews.'
                                : ' Do not autoplay previews.'}
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.dataUsagePerScreen == 'Auto'
                                ? ' Default video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.dataUsagePerScreen == 'Low'
                                ? ' Basic video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.dataUsagePerScreen == 'Medium'
                                ? ' Standard video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[2]
                                .autoplayControls.dataUsagePerScreen == 'High'
                                ? ' Best video and audio quality.'
                                : null}
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
            ) : null}
            {getUserFromIDData.getUserFromID.profiles[3] ? (
              <Box>
                <Flex
                  align="center"
                  justify="space-between"
                  pr={2}
                  cursor="pointer"
                  onClick={onToggle4}
                  py={3}
                  borderBottom="1px #ccc solid"
                >
                  <Flex align="center">
                    <Image
                      src={
                        getUserFromIDData.getUserFromID.profiles[3]
                          .profileImageUrl
                      }
                      alt={
                        getUserFromIDData.getUserFromID.profiles[3].profileName
                      }
                      borderRadius="md"
                      w="60px"
                      h="60px"
                      objectFit="contain"
                    />
                    <Box ml={5}>
                      <Text fontSize="md" fontWeight="bold" color="#333">
                        {
                          getUserFromIDData.getUserFromID.profiles[3]
                            .profileName
                        }
                      </Text>

                      <Text
                        fontSize="xs"
                        className="capitalize"
                        color="#787878"
                      >
                        {
                          getUserFromIDData.getUserFromID.profiles[3]
                            .maturitySettings.ageLimit
                        }
                      </Text>
                    </Box>
                  </Flex>

                  {isOpen4 ? (
                    <IoIosArrowUp size="28px" color="#aaaaaa" />
                  ) : (
                    <IoIosArrowDown size="28px" color="#aaaaaa" />
                  )}
                </Flex>
                <Collapse in={isOpen1} animateOpacity>
                  <Box pl="84px" w="full" borderBottom="1px #ccc solid">
                    {clickProfileIndex == '3' ? (
                      <Box>
                        {getUserFromIDData.getUserFromID.profiles[3]
                          .profileLock == 'On' ? (
                          <Link href="" passHref>
                            <a className="flex justify-between items-center w-full">
                              <Flex
                                justify="space-between"
                                align="center"
                                py={6}
                                cursor="pointer"
                                w="full"
                                borderBottom="1px #ccc solid"
                                color="#0073E6"
                              >
                                <Box>
                                  <Text fontSize="md" color="#333">
                                    Profile Email
                                  </Text>
                                </Box>
                                <Box _hover={{ textDecoration: 'underline' }}>
                                  <Text fontSize="sm">Add</Text>
                                </Box>
                              </Flex>
                            </a>
                          </Link>
                        ) : null}
                      </Box>
                    ) : null}

                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Language
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[3]
                                  .language
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing Restrictions
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {/* {
                                    getUserFromIDData.getUserFromID.profiles[3]
                                      .language
                                  } */}
                              {/* bak buna anam */}
                              No Restrictions.
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Profile Lock
                            </Text>
                            <Text fontSize="xs" color="#787878">
                              {
                                getUserFromIDData.getUserFromID.profiles[3]
                                  .profileLock
                              }
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Viewing activity
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Ratings
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">View</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          borderBottom="1px #ccc solid"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Subtitle appearance
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                    <Link href="" passHref>
                      <a className="flex justify-between items-center w-full">
                        <Flex
                          justify="space-between"
                          align="center"
                          py={6}
                          cursor="pointer"
                          w="full"
                          color="#0073E6"
                        >
                          <Box>
                            <Text fontSize="md" color="#333">
                              Playback settings
                            </Text>

                            {/* db ye bu alanı ekle dataUsagePerScreen */}
                            <Text fontSize="xs" color="#787878">
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.autoplayNextEpisode
                                ? 'Autoplay episode.'
                                : 'Do not autoplay next episode.'}
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.previews
                                ? ' Autoplay previews.'
                                : ' Do not autoplay previews.'}
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.dataUsagePerScreen == 'Auto'
                                ? ' Default video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.dataUsagePerScreen == 'Low'
                                ? ' Basic video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.dataUsagePerScreen == 'Medium'
                                ? ' Standard video and audio quality.'
                                : null}
                              {getUserFromIDData.getUserFromID.profiles[3]
                                .autoplayControls.dataUsagePerScreen == 'High'
                                ? ' Best video and audio quality.'
                                : null}
                            </Text>
                          </Box>
                          <Box _hover={{ textDecoration: 'underline' }}>
                            <Text fontSize="sm">Change</Text>
                          </Box>
                        </Flex>
                      </a>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
            ) : null}
            <Box>
              <Flex
                align="center"
                justify="space-between"
                pr={2}
                cursor="pointer"
                onClick={onToggleChild}
                py={3}
                borderBottom="1px #ccc solid"
              >
                <Flex align="center">
                  <Image
                    src={getUserFromIDData.getUserFromID.child.childImageUrl}
                    alt={getUserFromIDData.getUserFromID.child.childName}
                    borderRadius="md"
                    w="60px"
                    h="60px"
                    objectFit="contain"
                  />
                  <Box ml={5}>
                    <Text fontSize="md" fontWeight="bold" color="#333">
                      {getUserFromIDData.getUserFromID.child.childName}
                    </Text>

                    <Text fontSize="xs" color="#787878">
                      {
                        getUserFromIDData.getUserFromID.child.maturitySettings
                          .ageLimit
                      }{' '}
                      and below
                    </Text>
                  </Box>
                </Flex>
                {isOpenChild ? (
                  <IoIosArrowUp size="28px" color="#aaaaaa" />
                ) : (
                  <IoIosArrowDown size="28px" color="#aaaaaa" />
                )}
              </Flex>
              <Collapse in={isOpenChild} animateOpacity>
                <Box pl="84px" w="full" borderBottom="1px #ccc solid">
                  {clickProfileIndex == 'Child' ? (
                    <Box>
                      {getUserFromIDData.getUserFromID.child.profileLock ==
                      'On' ? (
                        <Link href="" passHref>
                          <a className="flex justify-between items-center w-full">
                            <Flex
                              justify="space-between"
                              align="center"
                              py={6}
                              cursor="pointer"
                              w="full"
                              borderBottom="1px #ccc solid"
                              color="#0073E6"
                            >
                              <Box>
                                <Text fontSize="md" color="#333">
                                  Profile Email
                                </Text>
                              </Box>
                              <Box _hover={{ textDecoration: 'underline' }}>
                                <Text fontSize="sm">Add</Text>
                              </Box>
                            </Flex>
                          </a>
                        </Link>
                      ) : null}
                    </Box>
                  ) : null}

                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Language
                          </Text>
                          <Text fontSize="xs" color="#787878">
                            {getUserFromIDData.getUserFromID.child.language}
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">Change</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Viewing Restrictions
                          </Text>
                          <Text fontSize="xs" color="#787878">
                            {/* {
                                    getUserFromIDData.getUserFromID.child
                                      .language
                                  } */}
                            {/* bak buna anam */}
                            No Restrictions.
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">Change</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Profile Lock
                          </Text>
                          <Text fontSize="xs" color="#787878">
                            {getUserFromIDData.getUserFromID.child.profileLock}
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">Change</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Viewing activity
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">View</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Ratings
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">View</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        borderBottom="1px #ccc solid"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Subtitle appearance
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">Change</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="flex justify-between items-center w-full">
                      <Flex
                        justify="space-between"
                        align="center"
                        py={6}
                        cursor="pointer"
                        w="full"
                        color="#0073E6"
                      >
                        <Box>
                          <Text fontSize="md" color="#333">
                            Playback settings
                          </Text>

                          {/* db ye bu alanı ekle dataUsagePerScreen */}
                          <Text fontSize="xs" color="#787878">
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.autoplayNextEpisode
                              ? 'Autoplay episode.'
                              : 'Do not autoplay next episode.'}
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.previews
                              ? ' Autoplay previews.'
                              : ' Do not autoplay previews.'}
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.dataUsagePerScreen == 'Auto'
                              ? ' Default video and audio quality.'
                              : null}
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.dataUsagePerScreen == 'Low'
                              ? ' Basic video and audio quality.'
                              : null}
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.dataUsagePerScreen == 'Medium'
                              ? ' Standard video and audio quality.'
                              : null}
                            {getUserFromIDData.getUserFromID.child
                              .autoplayControls.dataUsagePerScreen == 'High'
                              ? ' Best video and audio quality.'
                              : null}
                          </Text>
                        </Box>
                        <Box _hover={{ textDecoration: 'underline' }}>
                          <Text fontSize="sm">Change</Text>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                </Box>
              </Collapse>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default YourAccountComponent;
