import React, { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import ManageProfilesComponent from '../../Components/ManageProfiles/ManageProfilesComponent';
import AddProfilePage from '../../Components/Browse/AddProfilePage';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import {
  GET_CHILD_FROM_USER,
  GET_PROFILES_FROM_USER,
  GET_PROFILE_IMAGE_FROM_USER,
} from '../../GraphQL/Apollo-Client/Queries/userQueries';
import {
  ADD_PROFILE_TO_USER,
  CHANGE_CHILD_FROM_USER,
  CHANGE_TO_PROFILE_NAME,
  DELETE_CHILD_FROM_USER,
  DELETE_PROFILE_TO_USER,
} from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import DeleteProfileComponent from '../../Components/ManageProfiles/DeleteProfileComponent';

function Manage() {
  const [getProfilesFromUser, { data }] = useLazyQuery(GET_PROFILES_FROM_USER);
  const [addProfileToUser, { data: addProfileToUserData }] =
    useMutation(ADD_PROFILE_TO_USER);
  const [changeToProfileName, { data: changeToProfileNameData }] = useMutation(
    CHANGE_TO_PROFILE_NAME
  );
  const [deleteProfileToUser, { data: deleteProfileToUserData }] = useMutation(
    DELETE_PROFILE_TO_USER
  );

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
  const [manageProfileState, setManageProfileState] = useState(false);
  const [clickProfileIndex, setClickProfileIndex] = useState('');
  const [email, setEmail] = useState('');
  const [profileImageUrl1, setProfileImageUrl1] = useState('');
  const [language1, setLanguage1] = useState('');
  const [ageLimit1, setAgeLimit1] = useState('');
  const [autoplayNextEpisode1, setAutoplayNextEpisode1] = useState(true);
  const [previews1, setPreviews1] = useState(true);
  const [kids1, setKids1] = useState(false);
  const [profileImageUrl2, setProfileImageUrl2] = useState('');
  const [language2, setLanguage2] = useState('');
  const [ageLimit2, setAgeLimit2] = useState('');
  const [autoplayNextEpisode2, setAutoplayNextEpisode2] = useState(true);
  const [previews2, setPreviews2] = useState(true);
  const [kids2, setKids2] = useState(false);
  const [profileImageUrl3, setProfileImageUrl3] = useState('');
  const [language3, setLanguage3] = useState('');
  const [ageLimit3, setAgeLimit3] = useState('');
  const [autoplayNextEpisode3, setAutoplayNextEpisode3] = useState(true);
  const [previews3, setPreviews3] = useState(true);
  const [kids3, setKids3] = useState(false);
  const [profileImageUrl4, setProfileImageUrl4] = useState('');
  const [language4, setLanguage4] = useState('');
  const [ageLimit4, setAgeLimit4] = useState('');
  const [autoplayNextEpisode4, setAutoplayNextEpisode4] = useState(true);
  const [previews4, setPreviews4] = useState(true);
  const [kids4, setKids4] = useState(false);
  const [profileImageUrl5, setProfileImageUrl5] = useState('');
  const [language5, setLanguage5] = useState('');
  const [ageLimit5, setAgeLimit5] = useState('');
  const [autoplayNextEpisode5, setAutoplayNextEpisode5] = useState(true);
  const [previews5, setPreviews5] = useState(true);
  const [kids5, setKids5] = useState(false);
  const [images, setImages] = useState([]);
  const [deleteProfileCState, setDeleteProfileCState] = useState(false);
  const [deleteProfileCImage, setDeleteProfileCImage] = useState('');
  const [deleteProfileCName, setDeleteProfileCName] = useState('');
  const [u5, setU5] = useState('');

  const router = useRouter();

  const toast = useToast();

  const [getProfileImageFromUser, { data: getProfileImageFromUserData }] =
    useLazyQuery(GET_PROFILE_IMAGE_FROM_USER);

  const [getChildFromUser, { data: getChildFromUserData }] =
    useLazyQuery(GET_CHILD_FROM_USER);

  const [deleteChildFromUser, { data: deleteChildFromUserData }] = useMutation(
    DELETE_CHILD_FROM_USER
  );
  const [changeChildFromUser, { data: changeChildFromUserData }] = useMutation(
    CHANGE_CHILD_FROM_USER
  );

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/browse');
    router.prefetch('ManageProfiles');

    const profile = async () => {
      const email = await getEmailFromLocal()[0];

      if (email) {
        setEmail(email);
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

    // const ls = getLoginStateFromLocal()[0];

    // if (!ls) {
    //   router.push('/');
    // } else {
    //   profile();
    // }
    profile();

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
  }, [
    toast,
    router,
    data,
    getProfilesFromUser,
    setEmail,
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
      {deleteProfileCState ? (
        <DeleteProfileComponent
          deleteProfileCImage={deleteProfileCImage}
          setDeleteProfileCImage={setDeleteProfileCImage}
          deleteProfileCName={deleteProfileCName}
          setDeleteProfileCName={setDeleteProfileCName}
          setU5={setU5}
          setProfileImageUrl5={setProfileImageUrl5}
          setLanguage5={setLanguage5}
          setAgeLimit5={setAgeLimit5}
          setAutoplayNextEpisode5={setAutoplayNextEpisode5}
          setPreviews5={setPreviews5}
          setKids5={setKids5}
          deleteProfileToUser={deleteProfileToUser}
          deleteProfileToUserData={deleteProfileToUserData}
          email={email}
          clickProfileIndex={clickProfileIndex}
          toast={toast}
          router={router}
          deleteChildFromUser={deleteChildFromUser}
          deleteChildFromUserData={deleteChildFromUserData}
          setDeleteProfileCState={setDeleteProfileCState}
        />
      ) : (
        <Box>
          {data && selectProfileState && getChildFromUserData ? (
            <ManageProfilesComponent
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
              manageProfileState={manageProfileState}
              setManageProfileState={setManageProfileState}
              clickProfileIndex={clickProfileIndex}
              setClickProfileIndex={setClickProfileIndex}
              email={email}
              changeToProfileName={changeToProfileName}
              changeToProfileNameData={changeToProfileNameData}
              toast={toast}
              deleteProfileToUser={deleteProfileToUser}
              deleteProfileToUserData={deleteProfileToUserData}
              profileImageUrl1={profileImageUrl1}
              setProfileImageUrl1={setProfileImageUrl1}
              language1={language1}
              setLanguage1={setLanguage1}
              ageLimit1={ageLimit1}
              setAgeLimit1={setAgeLimit1}
              autoplayNextEpisode1={autoplayNextEpisode1}
              setAutoplayNextEpisode1={setAutoplayNextEpisode1}
              previews1={previews1}
              setPreviews1={setPreviews1}
              profileImageUrl2={profileImageUrl2}
              setProfileImageUrl2={setProfileImageUrl2}
              language2={language2}
              setLanguage2={setLanguage2}
              ageLimit2={ageLimit2}
              setAgeLimit2={setAgeLimit2}
              autoplayNextEpisode2={autoplayNextEpisode2}
              setAutoplayNextEpisode2={setAutoplayNextEpisode2}
              previews2={previews2}
              setPreviews2={setPreviews2}
              profileImageUrl3={profileImageUrl3}
              setProfileImageUrl3={setProfileImageUrl3}
              language3={language3}
              setLanguage3={setLanguage3}
              ageLimit3={ageLimit3}
              setAgeLimit3={setAgeLimit3}
              autoplayNextEpisode3={autoplayNextEpisode3}
              setAutoplayNextEpisode3={setAutoplayNextEpisode3}
              previews3={previews3}
              setPreviews3={setPreviews3}
              profileImageUrl4={profileImageUrl4}
              setProfileImageUrl4={setProfileImageUrl4}
              language4={language4}
              setLanguage4={setLanguage4}
              ageLimit4={ageLimit4}
              setAgeLimit4={setAgeLimit4}
              autoplayNextEpisode4={autoplayNextEpisode4}
              setAutoplayNextEpisode4={setAutoplayNextEpisode4}
              previews4={previews4}
              setPreviews4={setPreviews4}
              profileImageUrl5={profileImageUrl5}
              setProfileImageUrl5={setProfileImageUrl5}
              language5={language5}
              setLanguage5={setLanguage5}
              ageLimit5={ageLimit5}
              setAgeLimit5={setAgeLimit5}
              autoplayNextEpisode5={autoplayNextEpisode5}
              setAutoplayNextEpisode5={setAutoplayNextEpisode5}
              previews5={previews5}
              setPreviews5={setPreviews5}
              kids1={kids1}
              kids2={kids2}
              kids3={kids3}
              kids4={kids4}
              kids5={kids5}
              setKids1={setKids1}
              setKids2={setKids2}
              setKids3={setKids3}
              setKids4={setKids4}
              setKids5={setKids5}
              getChildFromUserData={getChildFromUserData}
              deleteChildFromUser={deleteChildFromUser}
              deleteChildFromUserData={deleteChildFromUserData}
              changeChildFromUser={changeChildFromUser}
              changeChildFromUserData={changeChildFromUserData}
              setDeleteProfileCState={setDeleteProfileCState}
              setDeleteProfileCImage={setDeleteProfileCImage}
              setDeleteProfileCName={setDeleteProfileCName}
              u5={u5}
              setU5={setU5}
            />
          ) : null}
        </Box>
      )}

      {addProfileState && images ? (
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

export default Manage;
