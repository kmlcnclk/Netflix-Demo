import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  useToast,
  Image,
  MenuDivider,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';
import Link from 'next/link';
import { GoBell } from 'react-icons/go';
import { useRouter } from 'next/dist/client/router';
import { getRememberMeFromLocal } from '../LocalStorage/rememberMeStorage';
import {
  deleteEmailFromLocal,
  getEmailFromLocal,
} from '../LocalStorage/emailStorage';
import { deleteEmailStateFromLocal } from '../LocalStorage/emailStateStorage';
import { deletePlanFromLocal } from '../LocalStorage/planformStorage';
import { deleteLoginStateFromLocal } from '../LocalStorage/loginStateStorage';
import { deleteRegistrationPhaseFromLocal } from '../LocalStorage/registrationPhase';
import { deleteUserIDFromLocal } from '../LocalStorage/userIDStorage';
import { deleteClickProfileFromLocal } from '../SessionStorage/clickProfileStorage';
import { GET_UNCLICKED_PROFILES } from '../GraphQL/Apollo-Client/Queries/userQueries';
import { useLazyQuery } from '@apollo/client';
import {
  addClickProfileIndexToLocal,
  deleteClickProfileIndexFromLocal,
  getClickProfileIndexFromLocal,
} from '../SessionStorage/clickProfileIndexStorage';
import {
  addImageUrlToLocal,
  deleteImageUrlFromLocal,
  getImageUrlFromLocal,
} from '../LocalStorage/imageUrlStorage';
import {
  addImageNameToLocal,
  deleteImageNameFromLocal,
  getImageNameFromLocal,
} from '../LocalStorage/imageNameStorage';
import {
  addBrowsePageToLocal,
  deleteBrowsePageFromLocal,
  getBrowsePageFromLocal,
} from '../LocalStorage/browsePageStorage';
import { deleteRegistrationStateFromLocal } from '../LocalStorage/registrationStateStorage';
import styles from '../styles/browseHeader.module.css';

function Header({}) {
  const router = useRouter();
  const toast = useToast();

  const [getUnclickedProfiles, { data: getUnclickedProfilesData }] =
    useLazyQuery(GET_UNCLICKED_PROFILES);

  const [clickProfileIndex, setClickProfileIndex] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [browsePage, setBrowsePage] = useState('');
  const [navbar, setNavbar] = useState(false);

  const ref = useRef();

  useEffect(() => {
    router.prefetch('/logout');
    router.prefetch('/browse/');
    router.prefetch('/browse/genre/83');
    router.prefetch('/browse/genre/34399');
    router.prefetch('/latest');
    router.prefetch('/browse/my-list');

    const cpi = getClickProfileIndexFromLocal()[0];
    if (cpi) {
      setClickProfileIndex(cpi);
    }

    const iu = getImageUrlFromLocal()[0];
    if (iu) {
      setImageUrl(iu);
    }

    const iN = getImageNameFromLocal()[0];
    if (iN) {
      setImageName(iN);
    }

    const getUnclickedProfilesE = async () => {
      const email = await getEmailFromLocal()[0];

      try {
        await getUnclickedProfiles({
          variables: {
            email: email,
            clickProfileIndex: clickProfileIndex,
          },
        });
      } catch (err) {
        toast({
          title: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    getUnclickedProfilesE();

    const bp = getBrowsePageFromLocal()[0];
    if (bp) {
      setBrowsePage(bp);
    }

    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll',changeBackground);
  }, [
    router,
    getUnclickedProfiles,
    toast,
    clickProfileIndex,
    setBrowsePage,
    setNavbar,
  ]);

  const logout = async () => {
    const rememberMe = await getRememberMeFromLocal()[0];

    if (!rememberMe) {
      await deleteEmailFromLocal();
    }

    await deleteEmailStateFromLocal();
    await deletePlanFromLocal();
    await deleteLoginStateFromLocal();
    await deleteRegistrationPhaseFromLocal();
    await deleteUserIDFromLocal();
    await deleteClickProfileFromLocal();
    await deleteImageNameFromLocal();
    await deleteImageUrlFromLocal();
    await deleteBrowsePageFromLocal();
    await deleteClickProfileIndexFromLocal();
    await deleteRegistrationStateFromLocal();

    router.push('/logout');
  };

  const clickFunc = async (e, i, u) => {
    await deleteBrowsePageFromLocal();
    await addBrowsePageToLocal(i);

    router.push(u);
  };

  const clickProfile = async (e, i, image, name) => {
    await deleteClickProfileIndexFromLocal();
    await addClickProfileIndexToLocal(i);

    const imageUrl = await image;

    await deleteImageUrlFromLocal();
    await addImageUrlToLocal(imageUrl);

    const imageName = await name;

    await deleteImageNameFromLocal();
    await addImageNameToLocal(imageName);

    const email = await getEmailFromLocal()[0];

    const cpi = await getClickProfileIndexFromLocal()[0];
    await setClickProfileIndex(cpi);

    try {
      await getUnclickedProfiles({
        variables: {
          email: email,
          clickProfileIndex: cpi,
        },
      });
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    router.reload();
  };

  return (
    <Box ref={ref}>
      {getUnclickedProfilesData ? (
        <Flex
          // bgColor={'rgba(20, 20, 20, 0.0)'}
          w="100%"
          // bg="#141414"
          // background="transparent"
          className={
            navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
          }
          position="fixed"
          h="68"
          left="0"
          pl={50}
          pr={50}
          top="0"
          zIndex="3"
          backgroundSize="0"
          justify="space-between"
        >
          <Flex justify="space-between" align="center">
            <Flex
              justify="center"
              align="center"
              pt={2}
              pr={10}
              cursor="pointer"
            >
              <Link href="/" passHref>
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
            <Flex justify="center" align="center" pl={12}>
              <Box onClick={(e) => clickFunc(e, 'Home', '/browse/')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'Home' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'Home' ? 'semibold' : 'normal'}
                >
                  Home
                </Text>
              </Box>
              <Box
                onClick={(e) => clickFunc(e, 'TV Shows', '/browse/genre/83')}
              >
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'TV Shows' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'TV Shows' ? 'semibold' : 'normal'}
                >
                  TV Shows
                </Text>
              </Box>
              <Box
                onClick={(e) => clickFunc(e, 'Movies', '/browse/genre/34399')}
              >
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'Movies' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'Movies' ? 'semibold' : 'normal'}
                >
                  Movies
                </Text>
              </Box>
              <Box onClick={(e) => clickFunc(e, 'New & Popular', '/latest')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'New & Popular' ? '#fff' : '#e5e5e5'}
                  fontWeight={
                    browsePage == 'New & Popular' ? 'semibold' : 'normal'
                  }
                >
                  New &amp; Popular
                </Text>
              </Box>
              <Box onClick={(e) => clickFunc(e, 'My List', '/browse/my-list')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'My List' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'My List' ? 'semibold' : 'normal'}
                >
                  My List
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex justify="center" align="center">
            <SearchIcon w={19} h={19} cursor="pointer" color="white" />
            <Text mr="5" fontSize="19" ml="5" color="white">
              Child
            </Text>
            <GoBell size={22} cursor="pointer" color="white" />
            <Menu>
              <MenuButton
                ml="5"
                as={Button}
                // bg="#141414"
                bgColor="rgba(20, 20, 20, 0.0)"
                _hover={{ bgColor: 'rgba(20, 20, 20, 0.0)' }}
                _active={{
                  bgColor: 'rgba(20, 20, 20, 0.0)',
                  borderColor: 'rgba(20, 20, 20, 0.0)',
                }}
                _focus={{
                  bgColor: 'rgba(20, 20, 20, 0.0)',
                  borderColor: 'rgba(20, 20, 20, 0.0)',
                }}
                rightIcon={<ChevronDownIcon />}
                color="white"
              >
                <Image
                  src={imageUrl}
                  alt={imageName}
                  borderRadius={3}
                  w="32px"
                  h="32px"
                  objectFit="contain"
                />
              </MenuButton>
              <MenuList
                borderRadius="none"
                bgColor="#080808"
                color="white"
                borderColor="#080808"
              >
                {clickProfileIndex == 0 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[0] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '1',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 1 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[0] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '0',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 2 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[0] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '0',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 3 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[0] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '0',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[0]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[0]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 0 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[1] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '2',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 1 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[1] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '1',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 2 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[1] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '1',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 3 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[1] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '1',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[1]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    />
                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[1]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 0 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[2] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '3',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    />

                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 1 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[2] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '2',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    />

                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 2 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[2] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '2',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    />

                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                {clickProfileIndex == 3 &&
                getUnclickedProfilesData.getUnclickedProfiles
                  .profilesImage[2] ? (
                  <MenuItem
                    _hover={{ bgColor: '#080808' }}
                    _focus={{ bgColor: '#080808' }}
                    onClick={(e) =>
                      clickProfile(
                        e,
                        '2',
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2],
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      )
                    }
                  >
                    <Image
                      w="32px"
                      h="32px"
                      src={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesImage[2]
                      }
                      alt={
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    />

                    <Text
                      fontSize="md"
                      ml={2}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {
                        getUnclickedProfilesData.getUnclickedProfiles
                          .profilesName[2]
                      }
                    </Text>
                  </MenuItem>
                ) : null}

                <MenuDivider color="#757575" />

                <MenuItem
                  color="white"
                  _focus={{ bgColor: '#141414' }}
                  _hover={{ bgColor: '#141414' }}
                >
                  <Text fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                    Manage Profiles
                  </Text>
                </MenuItem>
                <MenuItem
                  color="white"
                  _focus={{ bgColor: '#141414' }}
                  _hover={{ bgColor: '#141414' }}
                >
                  <Link href="/YourAccount" passHref>
                    <a target="_blank">
                      <Text
                        fontSize="sm"
                        color="white"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Account
                      </Text>
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem
                  color="white"
                  _focus={{ bgColor: '#141414' }}
                  _hover={{ bgColor: '#141414' }}
                >
                  <Link href="https://help.netflix.com/tr/" passHref>
                    <a target="_blank">
                      <Text
                        fontSize="sm"
                        color="white"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Help Center
                      </Text>
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem
                  color="white"
                  _focus={{ bgColor: '#141414' }}
                  _hover={{ bgColor: '#141414' }}
                  onClick={logout}
                >
                  <Text fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                    Sign out of Netflix
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      ) : null}
    </Box>
  );
}

export default Header;
