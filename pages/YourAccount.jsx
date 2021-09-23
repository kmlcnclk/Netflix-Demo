import React, { useEffect, useState } from 'react';
import { Box, useToast, useDisclosure } from '@chakra-ui/react';
import YourAccountComponent from '../Components/YourAccount/YourAccountComponent';
import {
  GET_PROFILES_FROM_USER,
  GET_USER_FROM_ID,
} from '../GraphQL/Apollo-Client/Queries/userQueries';
import { getEmailFromLocal } from '../LocalStorage/emailStorage';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import { getUserIDFromLocal } from '../LocalStorage/userIDStorage';
import { getClickProfileIndexFromLocal } from '../SessionStorage/clickProfileIndexStorage';
import LayoutYourAccount from '../Components/YourAccount/LayoutYourAccount';

function YourAccount() {
  const [getProfilesFromUser, { data }] = useLazyQuery(GET_PROFILES_FROM_USER);
  const [getUserFromID, { data: getUserFromIDData }] =
    useLazyQuery(GET_USER_FROM_ID);

  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
  const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();
  const { isOpen: isOpenChild, onToggle: onToggleChild } = useDisclosure();

  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [clickProfileIndex, setClickProfileIndex] = useState('');

  useEffect(() => {
    router.prefetch('/');

    const getEmail = async () => {
      const e = await getEmailFromLocal()[0];

      setEmail(e);
    };

    getEmail();

    const profile = async () => {
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

    // const ls = getLoginStateFromLocal()[0];

    // if (!ls) {
    //   router.push('/');
    // } else {
    //   profile();
    // }
    profile();

    const user = async () => {
      const id = await getUserIDFromLocal()[0];
      if (id) {
        try {
          await getUserFromID({
            variables: {
              ID: id,
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

    user();

    const cpi = getClickProfileIndexFromLocal()[0];
    if (cpi) {
      setClickProfileIndex(cpi);
    }
  }, [
    getProfilesFromUser,
    toast,
    router,
    setEmail,
    email,
    getUserFromID,
    setClickProfileIndex,
  ]);

  return (
    <>
      <LayoutYourAccount>
        {data && getUserFromIDData ? (
          <YourAccountComponent
            data={data}
            email={email}
            getUserFromIDData={getUserFromIDData}
            isOpen1={isOpen1}
            onToggle1={onToggle1}
            isOpen2={isOpen2}
            onToggle2={onToggle2}
            isOpen3={isOpen3}
            onToggle3={onToggle3}
            isOpen4={isOpen4}
            onToggle4={onToggle4}
            isOpenChild={isOpenChild}
            onToggleChild={onToggleChild}
            clickProfileIndex={clickProfileIndex}
          />
        ) : null}
      </LayoutYourAccount>
    </>
  );
}

export default YourAccount;
