import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Box, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SettingsRestIDComponent from '../../../Components/SettingsRestID/SettingsRestIDComponent';
import {
  GET_ALL_USER,
  GET_UNCLICKED_PROFILES,
  GET_USER_FROM_ID,
} from '../../../GraphQL/Apollo-Client/Queries/userQueries';
import { initializeApollo } from '../../../src/apollo';
import {
  CHANGE_TO_USER_SLIDER_VALUE,
  DELETE_TITLE_RESTRICTIONS,
  IS_THE_PASSWORD_CORRECT,
} from '../../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useRouter } from 'next/dist/client/router';
import { getEmailFromLocal } from '../../../LocalStorage/emailStorage';
import { getClickProfileFromLocal } from '../../../SessionStorage/clickProfileStorage';
import { GET_ALL_MOVIES } from '../../../GraphQL/Apollo-Client/Queries/movieQueries';
import { GET_ALL_TV_SHOWS } from '../../../GraphQL/Apollo-Client/Queries/tvShowQueries';

function ID({ userID }) {
  const [getUserFromID, { data }] = useLazyQuery(GET_USER_FROM_ID);
  const [isThePasswordCorrect, { data: isThePasswordCorrectData }] =
    useMutation(IS_THE_PASSWORD_CORRECT);
  const [changeToUserSliderValue, { data: changeToUserSliderValueData }] =
    useMutation(CHANGE_TO_USER_SLIDER_VALUE);

  const [getUnclickedProfiles, { data: getUnclickedProfilesData }] =
    useLazyQuery(GET_UNCLICKED_PROFILES);

  const [deleteTitleRestrictions, { data: deleteTitleRestrictionsData }] =
    useMutation(DELETE_TITLE_RESTRICTIONS);

  const { data: getAllMoviesData } = useQuery(GET_ALL_MOVIES);
  const { data: getAllTVShowsData } = useQuery(GET_ALL_TV_SHOWS);

  const [password, setPassword] = useState('');
  const [passwordState, setPasswordState] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);
  const [ageLimit, setAgeLimit] = useState('');
  const [titleRestrictions, setTitleRestrictions] = useState([]);
  const [kids, setKids] = useState(false);

  const toast = useToast();

  const router = useRouter();

  useEffect(() => {
    const email = getEmailFromLocal()[0];

    router.prefetch('/');

    if (!email) {
      router.push('/');
    }

    const getUserID = async () => {
      try {
        await getUserFromID({
          variables: {
            ID: userID,
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
    if (userID) {
      getUserID();
      router.prefetch('/YourAccount');
    }

    const getUnclickedProfilesE = async () => {
      const email = await getEmailFromLocal()[0];
      const clickProfile = await getClickProfileFromLocal()[0];

      try {
        await getUnclickedProfiles({
          variables: {
            email: email,
            clickProfileIndex: clickProfile,
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
  }, [userID, getUserFromID, data, toast, router, getUnclickedProfiles]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      {data && getUnclickedProfilesData ? (
        <Box>
          {data.getUserFromID.profiles ? (
            <SettingsRestIDComponent
              data={data}
              isThePasswordCorrect={isThePasswordCorrect}
              isThePasswordCorrectData={isThePasswordCorrectData}
              password={password}
              setPassword={setPassword}
              passwordState={passwordState}
              setPasswordState={setPasswordState}
              toast={toast}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              changeToUserSliderValue={changeToUserSliderValue}
              changeToUserSliderValueData={changeToUserSliderValueData}
              ageLimit={ageLimit}
              setAgeLimit={setAgeLimit}
              router={router}
              getUnclickedProfilesData={getUnclickedProfilesData}
              getAllMoviesData={getAllMoviesData}
              getAllTVShowsData={getAllTVShowsData}
              titleRestrictions={titleRestrictions}
              setTitleRestrictions={setTitleRestrictions}
              deleteTitleRestrictions={deleteTitleRestrictions}
              deleteTitleRestrictionsData={deleteTitleRestrictionsData}
              kids={kids}
              setKids={setKids}
            />
          ) : null}
        </Box>
      ) : null}
    </Box>
  );
}

export default ID;

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { connectDatabase } = require('../../../Server/DB/connectDatabase');

  await connectDatabase();

  const { data } = await apolloClient.query({
    query: GET_ALL_USER,
  });

  return {
    paths: data.getAllUser.map((userID) => {
      return {
        params: { id: userID },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      userID: params.id,
    },
  };
}
