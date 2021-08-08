import React, { Component } from 'react';
import { Box, Flex, Container, Heading, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import { AddIcon } from '@chakra-ui/icons';
import { BrowseProfiles } from '../../src/BrowseProfiles';
import { RiPencilFill } from 'react-icons/ri';
import BrowseMainVideosPageComponent from './BrowseMainVideosPageComponent';
import {
  addClickProfileIndexToLocal,
  deleteClickProfileIndexFromLocal,
} from '../../SessionStorage/clickProfileIndexStorage';
import {
  addImageUrlToLocal,
  deleteImageUrlFromLocal,
} from '../../LocalStorage/imageUrlStorage';
import {
  addImageNameToLocal,
  deleteImageNameFromLocal,
} from '../../LocalStorage/imageNameStorage';

class SelectProfilePage extends Component {
  state = {
    profiles: [],
  };

  async componentDidMount() {
    await this.setState({
      profiles: this.props.data.getProfilesFromUser.profiles,
    });

    await this.props.setProfileCount(this.state.profiles.length);
  }

  clickProfile = async (e, i) => {
    await deleteClickProfileIndexFromLocal();
    await addClickProfileIndexToLocal(i);

    const imageUrl = await this.state.profiles[i].profileImageUrl;

    await deleteImageUrlFromLocal();
    await addImageUrlToLocal(imageUrl);

    const imageName = await this.state.profiles[i].profileName;

    await deleteImageNameFromLocal();
    await addImageNameToLocal(imageName);

    await this.props.setProfileState(true);
  };

  render() {
    const {
      profileState,
      setProfileState,
      add1Color,
      add2Color,
      add3Color,
      setAdd1Color,
      setAdd2Color,
      setAdd3Color,
      childColor,
      setChildColor,
      borderState,
      setBorderState,
      user1,
      setUser1,
      user2,
      setUser2,
      user3,
      setUser3,
      user4,
      setUser4,
      userBorderState1,
      setUserBorderState1,
      userBorderState2,
      setUserBorderState2,
      userBorderState3,
      setUserBorderState3,
      userBorderState4,
      setUserBorderState4,
      profileCount,
      router,
      clickProfileIndex,
      setClickProfileIndex,
    } = this.props;

    const { profiles } = this.state;

    return (
      <Box>
        {profileState ? (
          <Box>
            <BrowseMainVideosPageComponent />
          </Box>
        ) : (
          <Box bgColor="#141414">
            <Flex
              justify="flex-start"
              align="center"
              pt={2}
              pl={12}
              cursor="pointer"
            >
              <Link href="/browse" passHref>
                <a>
                  <NextImage
                    src="/net.png"
                    width={'100'}
                    height={'50'}
                    objectFit="contain"
                    alt="Netflix"
                  />
                </a>
              </Link>
            </Flex>

            <Flex justify="center" align="center">
              <Container maxW="5xl" color="white" textAlign="center">
                <Text fontSize="5xl" fontWeight="semibold">
                  Who&apos;s watching?
                </Text>
                <Flex justify="center" m={3}>
                  <Flex>
                    {profileCount >= 1 ? (
                      <Flex
                        direction="column"
                        cursor="pointer"
                        justify="center"
                        align="center"
                        onMouseEnter={(e) => {
                          setUser1('#dadada');
                          setUserBorderState1(true);
                        }}
                        onClick={(e) => this.clickProfile(e, '0')}
                        onMouseLeave={(e) => {
                          setUser1('#808080');
                          setUserBorderState1(false);
                        }}
                        m={2}
                      >
                        <Box
                          width="136.59px"
                          height="136.59px"
                          border={userBorderState1 ? '2px white solid' : null}
                          mb={2}
                        >
                          <Image
                            src={`${profiles[0].profileImageUrl}`}
                            width="136.59px"
                            alt={profiles[0].profileName}
                            objectFit="contain"
                          />
                        </Box>

                        <Text fontSize="lg" fontWeight="semibold" color={user1}>
                          {profiles[0].profileName}
                        </Text>
                      </Flex>
                    ) : null}
                    {profileCount >= 2 ? (
                      <Flex
                        direction="column"
                        cursor="pointer"
                        justify="center"
                        align="center"
                        onMouseEnter={(e) => {
                          setUser2('#dadada');
                          setUserBorderState2(true);
                        }}
                        onClick={(e) => this.clickProfile(e, '1')}
                        onMouseLeave={(e) => {
                          setUser2('#808080');
                          setUserBorderState2(false);
                        }}
                        m={2}
                      >
                        <Box
                          width="136.59px"
                          height="136.59px"
                          border={userBorderState2 ? '2px white solid' : null}
                          mb={2}
                        >
                          <Image
                            src={`${profiles[1].profileImageUrl}`}
                            width="136.59px"
                            alt={profiles[1].profileName}
                            objectFit="contain"
                          />
                        </Box>

                        <Text fontSize="lg" fontWeight="semibold" color={user2}>
                          {profiles[1].profileName}
                        </Text>
                      </Flex>
                    ) : null}
                    {profileCount >= 3 ? (
                      <Flex
                        direction="column"
                        cursor="pointer"
                        justify="center"
                        align="center"
                        onMouseEnter={(e) => {
                          setUser3('#dadada');
                          setUserBorderState3(true);
                        }}
                        onClick={(e) => this.clickProfile(e, '2')}
                        onMouseLeave={(e) => {
                          setUser3('#808080');
                          setUserBorderState3(false);
                        }}
                        m={2}
                      >
                        <Box
                          width="136.59px"
                          height="136.59px"
                          border={userBorderState3 ? '2px white solid' : null}
                          mb={2}
                        >
                          <Image
                            src={`${profiles[2].profileImageUrl}`}
                            width="136.59px"
                            alt={profiles[2].profileName}
                            objectFit="contain"
                          />
                        </Box>

                        <Text fontSize="lg" fontWeight="semibold" color={user3}>
                          {profiles[2].profileName}
                        </Text>
                      </Flex>
                    ) : null}
                    {profileCount >= 4 ? (
                      <Flex
                        direction="column"
                        cursor="pointer"
                        justify="center"
                        align="center"
                        onMouseEnter={(e) => {
                          setUser4('#dadada');
                          setUserBorderState4(true);
                        }}
                        onClick={(e) => this.clickProfile(e, '3')}
                        onMouseLeave={(e) => {
                          setUser4('#808080');
                          setUserBorderState4(false);
                        }}
                        m={2}
                      >
                        <Box
                          width="136.59px"
                          height="136.59px"
                          border={userBorderState4 ? '2px white solid' : null}
                          mb={2}
                        >
                          <Image
                            src={`${profiles[3].profileImageUrl}`}
                            width="136.59px"
                            alt={profiles[3].profileName}
                            objectFit="contain"
                          />
                        </Box>

                        <Text fontSize="lg" fontWeight="semibold" color={user4}>
                          {profiles[3].profileName}
                        </Text>
                      </Flex>
                    ) : null}
                  </Flex>

                  <Flex
                    direction="column"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    onMouseEnter={(e) => {
                      setChildColor('#dadada');
                      setBorderState(true);
                    }}
                    onClick={(e) => this.clickProfile(e, '4')}
                    onMouseLeave={(e) => {
                      setChildColor('#808080');
                      setBorderState(false);
                    }}
                    m={2}
                  >
                    <Box width="136.59px" height="136.59px" mb={2}>
                      <Image
                        src="https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0"
                        border={borderState ? '2px white solid' : null}
                        width="full"
                        height="full"
                        alt="Child"
                        objectFit="contain"
                      />
                    </Box>

                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      color={childColor}
                    >
                      Child
                    </Text>
                  </Flex>

                  {profileCount < 4 ? (
                    <Flex
                      onClick={(e) => {
                        this.props.setSelectProfileState(false);
                        this.props.setAddProfileState(true);
                      }}
                      justify="center"
                      align="center"
                      m={2}
                      borderRadius="2px"
                      as="div"
                      cursor="pointer"
                      bgColor={add1Color}
                      onMouseEnter={(e) => {
                        setAdd1Color('#e3e3e3');
                        setAdd2Color('#737373');
                        setAdd3Color('#e3e3e3');
                      }}
                      onMouseLeave={(e) => {
                        setAdd1Color('#141414');
                        setAdd2Color('#646464');
                        setAdd3Color('#141414');
                      }}
                      w="136.59px"
                      h="136.59px"
                    >
                      <Box as="div">
                        <Box
                          as="div"
                          borderRadius="full"
                          bgColor={add2Color}
                          w="min"
                        >
                          <AddIcon color={add3Color} w="68px" h="68px" p={3} />
                        </Box>
                      </Box>
                    </Flex>
                  ) : null}
                </Flex>

                <Flex direction="column" justify="center" align="center">
                  <Flex
                    justify="center"
                    align="center"
                    m={10}
                    border="#808080 solid 1px"
                    bgColor="#141414"
                    color="#808080"
                    p={2}
                    w="239.2px"
                    h="37.38px"
                    pt="8.196px"
                    pb="8.196px"
                    pl="24.588px"
                    pr="24.588px"
                    cursor="pointer"
                    _hover={{ color: 'white', borderColor: 'white' }}
                    onClick={(e) => router.push('/ManageProfiles')}
                  >
                    <Text
                      fontSize="lg"
                      textAlign="center"
                      fontWeight="semibold"
                    >
                      PROFİLLERİ YÖNET
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Box>
        )}
      </Box>
    );
  }
}

export default SelectProfilePage;
