import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  MenuDivider,
  Text,
  Box,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import NextImage from 'next/image';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  deleteEmailFromLocal,
  getEmailFromLocal,
} from '../../LocalStorage/emailStorage';
import {
  addClickProfileToLocal,
  deleteClickProfileFromLocal,
} from '../../SessionStorage/clickProfileStorage';
import { deleteEmailStateFromLocal } from '../../LocalStorage/emailStateStorage';
import { deletePlanFromLocal } from '../../LocalStorage/planformStorage';
import { deleteLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import { deleteRegistrationPhaseFromLocal } from '../../LocalStorage/registrationPhase';
import { getRememberMeFromLocal } from '../../LocalStorage/rememberMeStorage';
import { deleteUserIDFromLocal } from '../../LocalStorage/userIDStorage';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import {
  addClickProfileIndexToLocal,
  deleteClickProfileIndexFromLocal,
} from '../../SessionStorage/clickProfileIndexStorage';
import {
  addClickProfileIndexToLS,
  deleteClickProfileIndexFromLS,
} from '../../LocalStorage/clickProfileIndexLocalStorage';
import { deleteBrowsePageFromLocal } from '../../LocalStorage/browsePageStorage';
import {
  addImageUrlToLocal,
  deleteImageUrlFromLocal,
} from '../../LocalStorage/imageUrlStorage';
import {
  addImageNameToLocal,
  deleteImageNameFromLocal,
} from '../../LocalStorage/imageNameStorage';
import { deleteRegistrationStateFromLocal } from '../../LocalStorage/registrationStateStorage';
import {
  GET_CHILD_FROM_USER,
  GET_PROFILES,
} from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { useLazyQuery } from '@apollo/client';

function SettingsRestHeader({ imageUrl, imageName }) {
  const router = useRouter();
  const toast = useToast();

  const [getChildFromUser, { data: getChildFromUserData }] =
    useLazyQuery(GET_CHILD_FROM_USER);

  const [getProfiles, { data: getProfilesData }] = useLazyQuery(GET_PROFILES);

  useEffect(() => {
    router.prefetch('/logout');
    router.prefetch('/browse');

    const getProfilesFunc = async () => {
      const email = await getEmailFromLocal()[0];

      try {
        await getProfiles({
          variables: {
            email,
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
    getProfilesFunc();

    const getChildFromUserFunc = async () => {
      const email = await getEmailFromLocal()[0];
      try {
        await getChildFromUser({
          variables: {
            email: email,
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
    getChildFromUserFunc();
  }, [router, getChildFromUser, getProfiles, toast]);

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
    await deleteClickProfileIndexFromLS();
    await deleteRegistrationStateFromLocal();

    router.push('/logout');
  };

  const clickMenuItem = async (i) => {
    const clci = await getProfilesData.getProfiles.i[i];
    await deleteClickProfileIndexFromLocal();
    await addClickProfileIndexToLocal(`${clci}`);

    await deleteClickProfileIndexFromLS();
    await addClickProfileIndexToLS(`${clci}`);

    const clcp = await getProfilesData.getProfiles.i[i];
    await deleteClickProfileFromLocal();
    await addClickProfileToLocal(`${clcp}`);

    const imgURL = await getProfilesData.getProfiles.profilesImage[i];

    await deleteImageUrlFromLocal();
    await addImageUrlToLocal(imgURL);

    const imgName = await getProfilesData.getProfiles.profilesName[i];

    await deleteImageNameFromLocal();
    await addImageNameToLocal(imgName);

    router.push('/browse');
  };

  const clickProfileChild = async (e, i, image, name) => {
    await deleteClickProfileIndexFromLocal();
    await addClickProfileIndexToLocal(i);

    await deleteClickProfileIndexFromLS();
    await addClickProfileIndexToLS(i);

    const imageUrl = await image;

    await deleteImageUrlFromLocal();
    await addImageUrlToLocal(imageUrl);

    const imageName = await name;

    await deleteImageNameFromLocal();
    await addImageNameToLocal(imageName);

    await router.push('/Kids');
  };

  return (
    <>
      {getProfilesData ? (
        <Flex
          align="center"
          justify="space-between"
          bgColor="#080808"
          h="70px"
          position="fixed"
          left="0"
          top="0"
          w="100%"
          zIndex="10"
        >
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
                  width={'117.99px'}
                  height={'31.89'}
                  objectFit="contain"
                  alt="Netflix"
                />
              </a>
            </Link>
          </Flex>
          <Menu>
            <MenuButton
              w="max"
              mr={12}
              mt={2}
              bgColor="#080808"
              _hover={{ bgColor: '#080808' }}
              _active={{ bgColor: '#080808' }}
              _focus={{ borderColor: '#080808' }}
              as={Button}
              rightIcon={<ChevronDownIcon color="white" />}
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
              {getProfilesData.getProfiles.profilesImage[0] ? (
                <MenuItem
                  _hover={{ bgColor: '#080808' }}
                  _focus={{ bgColor: '#080808' }}
                  _active={{ bgColor: '#080808' }}
                  onClick={(e) => clickMenuItem('0')}
                >
                  <Image
                    w="32px"
                    h="32px"
                    src={getProfilesData.getProfiles.profilesImage[0]}
                    alt={getProfilesData.getProfiles.profilesName[0]}
                  />
                  <Text
                    fontSize="md"
                    ml={2}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {getProfilesData.getProfiles.profilesName[0]}
                  </Text>
                </MenuItem>
              ) : null}
              {getProfilesData.getProfiles.profilesImage[1] ? (
                <MenuItem
                  _hover={{ bgColor: '#080808' }}
                  _focus={{ bgColor: '#080808' }}
                  _active={{ bgColor: '#080808' }}
                  onClick={(e) => clickMenuItem('1')}
                >
                  <Image
                    w="32px"
                    h="32px"
                    src={getProfilesData.getProfiles.profilesImage[1]}
                    alt={getProfilesData.getProfiles.profilesName[1]}
                  />
                  <Text
                    fontSize="md"
                    ml={2}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {getProfilesData.getProfiles.profilesName[1]}
                  </Text>
                </MenuItem>
              ) : null}
              {getProfilesData.getProfiles.profilesImage[2] ? (
                <MenuItem
                  _hover={{ bgColor: '#080808' }}
                  _focus={{ bgColor: '#080808' }}
                  _active={{ bgColor: '#080808' }}
                  onClick={(e) => clickMenuItem('2')}
                >
                  <Image
                    w="32px"
                    h="32px"
                    src={getProfilesData.getProfiles.profilesImage[2]}
                    alt={getProfilesData.getProfiles.profilesName[2]}
                  />

                  <Text
                    fontSize="md"
                    ml={2}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {getProfilesData.getProfiles.profilesName[2]}
                  </Text>
                </MenuItem>
              ) : null}
              {getProfilesData.getProfiles.profilesImage[3] ? (
                <MenuItem
                  _hover={{ bgColor: '#080808' }}
                  _focus={{ bgColor: '#080808' }}
                  _active={{ bgColor: '#080808' }}
                  onClick={(e) => clickMenuItem('3')}
                >
                  <Image
                    w="32px"
                    h="32px"
                    src={getProfilesData.getProfiles.profilesImage[3]}
                    alt={getProfilesData.getProfiles.profilesName[3]}
                  />

                  <Text
                    fontSize="md"
                    ml={2}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {getProfilesData.getProfiles.profilesName[3]}
                  </Text>
                </MenuItem>
              ) : null}

              {getChildFromUserData ? (
                <Box>
                  {getChildFromUserData.getChildFromUser.child ? (
                    <MenuItem
                      _hover={{ bgColor: '#080808' }}
                      _focus={{ bgColor: '#080808' }}
                      _active={{ bgColor: '#080808' }}
                      onClick={(e) =>
                        clickProfileChild(
                          e,
                          'Child',
                          getChildFromUserData.getChildFromUser.child
                            .childImageUrl,
                          getChildFromUserData.getChildFromUser.child.childName
                        )
                      }
                    >
                      <Image
                        w="32px"
                        h="32px"
                        src={
                          getChildFromUserData.getChildFromUser.child
                            .childImageUrl
                        }
                        alt={
                          getChildFromUserData.getChildFromUser.child.childName
                        }
                      />

                      <Text
                        fontSize="md"
                        ml={2}
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {getChildFromUserData.getChildFromUser.child.childName}
                      </Text>
                    </MenuItem>
                  ) : null}
                </Box>
              ) : null}

              <MenuItem
                _hover={{ bgColor: '#080808' }}
                _focus={{ bgColor: '#080808' }}
                _active={{ bgColor: '#080808' }}
              >
                <Link href="/profiles/manage" passHref>
                  <Text fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                    Manage Profiles
                  </Text>
                </Link>
              </MenuItem>
              <MenuDivider color="#757575" />
              <MenuItem
                _hover={{ bgColor: '#080808' }}
                _focus={{ bgColor: '#080808' }}
                _active={{ bgColor: '#080808' }}
              >
                <Link href="/YourAccount" passHref>
                  <a>
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
                _hover={{ bgColor: '#080808' }}
                _focus={{ bgColor: '#080808' }}
                _active={{ bgColor: '#080808' }}
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
                _hover={{ bgColor: '#080808' }}
                _focus={{ bgColor: '#080808' }}
                _active={{ bgColor: '#080808' }}
                onClick={logout}
              >
                <Text fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                  Sign out of Netflix
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : null}
    </>
  );
}

export default SettingsRestHeader;
