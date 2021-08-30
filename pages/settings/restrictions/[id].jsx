import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Box, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SettingsRestIDComponent from '../../../Components/SettingsRestID/SettingsRestIDComponent';
import {
  GET_ALL_USER,
  GET_USER_FROM_ID,
} from '../../../GraphQL/Apollo-Client/Queries/userQueries';
import { initializeApollo } from '../../../src/apollo';
import {
  CHANGE_TO_USER_SLIDER_VALUE,
  DELETE_TITLE_RESTRICTIONS,
  IS_THE_PASSWORD_CORRECT,
  IS_THE_PASSWORD_CORRECT_CHILD_PROFILE,
} from '../../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useRouter } from 'next/dist/client/router';
import { getEmailFromLocal } from '../../../LocalStorage/emailStorage';
import { GET_ALL_MOVIES } from '../../../GraphQL/Apollo-Client/Queries/movieQueries';
import { GET_ALL_TV_SHOWS } from '../../../GraphQL/Apollo-Client/Queries/tvShowQueries';

function ID({ userID }) {
  const [getUserFromID, { data }] = useLazyQuery(GET_USER_FROM_ID);
  const [isThePasswordCorrect, { data: isThePasswordCorrectData }] =
    useMutation(IS_THE_PASSWORD_CORRECT);

  const [
    isThePasswordCorrectChildProfile,
    { data: isThePasswordCorrectChildProfileData },
  ] = useMutation(IS_THE_PASSWORD_CORRECT_CHILD_PROFILE);

  const [changeToUserSliderValue, { data: changeToUserSliderValueData }] =
    useMutation(CHANGE_TO_USER_SLIDER_VALUE);

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
  }, [userID, getUserFromID, data, toast, router]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      {data ? (
        <Box>
          {data.getUserFromID.profiles || data.getUserFromID.child ? (
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
              getAllMoviesData={getAllMoviesData}
              getAllTVShowsData={getAllTVShowsData}
              titleRestrictions={titleRestrictions}
              setTitleRestrictions={setTitleRestrictions}
              deleteTitleRestrictions={deleteTitleRestrictions}
              deleteTitleRestrictionsData={deleteTitleRestrictionsData}
              kids={kids}
              setKids={setKids}
              isThePasswordCorrectChildProfile={
                isThePasswordCorrectChildProfile
              }
              isThePasswordCorrectChildProfileData={
                isThePasswordCorrectChildProfileData
              }
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
