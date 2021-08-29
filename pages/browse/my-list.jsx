import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MyListComponent from '../../Components/Browse/MyList/MyListComponent';
import {
  ADD_MY_LIST,
  DELETE_MY_LIST,
} from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { GET_ALL_MY_LIST_TO_PROFILE } from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { getClickProfileIndexFromLocal } from '../../SessionStorage/clickProfileIndexStorage';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';

function MyList() {
  const [getAllMyListToProfile, { data: getAllMyListToProfileData }] =
    useLazyQuery(GET_ALL_MY_LIST_TO_PROFILE);

  const [deleteMyList, { data: deleteMyListData }] =
    useMutation(DELETE_MY_LIST);

  const [addMyList, { data: addMyListData }] = useMutation(ADD_MY_LIST);

  const toast = useToast();

  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');

    const ls = getLoginStateFromLocal()[0];
    if (!ls) {
      router.push('/');
    }
    const a = async () => {
      const email = await getEmailFromLocal()[0];
      const clickProfileIndex = await getClickProfileIndexFromLocal()[0];

      try {
        await getAllMyListToProfile({
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

    a();
  }, [getAllMyListToProfile, toast, router]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      {getAllMyListToProfileData ? (
        <MyListComponent
          getAllMyListToProfileData={getAllMyListToProfileData}
          deleteMyList={deleteMyList}
          deleteMyListData={deleteMyListData}
          toast={toast}
          router={router}
          addMyList={addMyList}
          addMyListData={addMyListData}
        />
      ) : null}
    </Box>
  );
}

export default MyList;
