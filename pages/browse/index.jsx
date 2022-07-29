import Head from 'next/head';
import { Box } from '@chakra-ui/layout';
// import Image from 'next/image';
import MainVideo from '../../Components/Videos/MainVideo';
import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import SelectProfilePage from '../../Components/Browse/SelectProfilePage';
import { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  GET_CHILD_FROM_USER,
  GET_PROFILES_FROM_USER,
  GET_PROFILE_IMAGE_FROM_USER,
} from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { useRouter } from 'next/dist/client/router';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import { useToast } from '@chakra-ui/react';
import AddProfilePage from '../../Components/Browse/AddProfilePage';
import { ADD_PROFILE_TO_USER } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { getClickProfileIndexFromLocal } from '../../SessionStorage/clickProfileIndexStorage';
import { getClickProfileFromLocal } from '../../SessionStorage/clickProfileStorage';

export default function Browse() {
  const [getProfilesFromUser, { data }] = useLazyQuery(GET_PROFILES_FROM_USER);
  const [addProfileToUser, { data: addProfileToUserData }] =
    useMutation(ADD_PROFILE_TO_USER);

  const [getProfileImageFromUser, { data: getProfileImageFromUserData }] =
    useLazyQuery(GET_PROFILE_IMAGE_FROM_USER);

  const [getChildFromUser, { data: getChildFromUserData }] =
    useLazyQuery(GET_CHILD_FROM_USER);

  const [profileState, setProfileState] = useState(false);
  const [add1Color, setAdd1Color] = useState('#141414');
  const [add2Color, setAdd2Color] = useState('#646464');
  const [add3Color, setAdd3Color] = useState('#141414');
  const [childColor, setChildColor] = useState('#808080');
  const [borderState, setBorderState] = useState(false);
  const [user1, setUser1] = useState('#808080');
  const [user2, setUser2] = useState('#808080');
  const [user3, setUser3] = useState('#808080');
  const [user4, setUser4] = useState('#808080');
  const [userBorderState1, setUserBorderState1] = useState(false);
  const [userBorderState2, setUserBorderState2] = useState(false);
  const [userBorderState3, setUserBorderState3] = useState(false);
  const [userBorderState4, setUserBorderState4] = useState(false);
  const [selectProfileState, setSelectProfileState] = useState(true);
  const [addProfileState, setAddProfileState] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileCount, setProfileCount] = useState(0);
  const [clickProfileIndex, setClickProfileIndex] = useState('0');
  const [images, setImages] = useState([]);

  const router = useRouter();

  const toast = useToast();

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/browse');
    router.prefetch('/ManageProfiles');
    router.prefetch('/Kids');

    const ls = getLoginStateFromLocal()[0];

    if (!ls) {
      router.push('/');
    } else {
      const clickProfile = getClickProfileFromLocal()[0];
      const clickProfileIndex = getClickProfileIndexFromLocal()[0];

      if (clickProfile && clickProfileIndex) {
        setProfileState(true);
      }

      const profile = async () => {
        const email = await getEmailFromLocal()[0];

        if (email) {
          try {
            await getProfilesFromUser({
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
        }
      };

      const child = async () => {
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
      child();

      profile();

      const cpi = getClickProfileIndexFromLocal()[0];

      if (cpi && cpi != 'Child') {
        setProfileState(true);
      } else if (cpi == 'Child') {
        router.push('/Kids');
      }

      const getProfileImageFromUserFunc = async () => {
        const email = await getEmailFromLocal()[0];

        try {
          await getProfileImageFromUser({
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

        if (getProfileImageFromUserData) {
          await setImages(
            getProfileImageFromUserData.getProfileImageFromUser.images
          );
        }
      };

      getProfileImageFromUserFunc();
    }
  }, [
    toast,
    router,
    data,
    getProfilesFromUser,
    getProfileImageFromUser,
    getProfileImageFromUserData,
    setImages,
    getChildFromUser,
  ]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      {data && selectProfileState && getChildFromUserData ? (
        <SelectProfilePage
          profileState={profileState}
          setProfileState={setProfileState}
          add1Color={add1Color}
          setAdd1Color={setAdd1Color}
          add2Color={add2Color}
          setAdd2Color={setAdd2Color}
          add3Color={add3Color}
          setAdd3Color={setAdd3Color}
          childColor={childColor}
          setChildColor={setChildColor}
          borderState={borderState}
          setBorderState={setBorderState}
          data={data}
          user1={user1}
          setUser1={setUser1}
          user2={user2}
          setUser2={setUser2}
          user3={user3}
          setUser3={setUser3}
          user4={user4}
          setUser4={setUser4}
          userBorderState1={userBorderState1}
          setUserBorderState1={setUserBorderState1}
          userBorderState2={userBorderState2}
          setUserBorderState2={setUserBorderState2}
          userBorderState3={userBorderState3}
          setUserBorderState3={setUserBorderState3}
          userBorderState4={userBorderState4}
          setUserBorderState4={setUserBorderState4}
          setSelectProfileState={setSelectProfileState}
          setAddProfileState={setAddProfileState}
          profileCount={profileCount}
          setProfileCount={setProfileCount}
          router={router}
          clickProfileIndex={clickProfileIndex}
          setClickProfileIndex={setClickProfileIndex}
          getChildFromUserData={getChildFromUserData}
        />
      ) : null}

      {addProfileState && images[0] ? (
        <AddProfilePage
          addProfileToUser={addProfileToUser}
          addProfileToUserData={addProfileToUserData}
          profileName={profileName}
          setProfileName={setProfileName}
          toast={toast}
          router={router}
          profileCount={profileCount}
          images={images}
        />
      ) : null}
    </Box>
  );
}
