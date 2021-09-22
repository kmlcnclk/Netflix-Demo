import React, { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import BillingDateEditComponent from '../../Components/SimpleMember/BillingDateEditComponent';
import Head from 'next/head';
import { CHANGE_BILLING_DATE_THAT_USER } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { GET_BILLING_DATE_FROM_USER } from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { useLazyQuery, useMutation } from '@apollo/client';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { useRouter } from 'next/router';

function Billingdateedit() {
  const [day, setDay] = useState('');

  const [changeBillingDateThatUser, { data: changeBillingDateThatUserData }] =
    useMutation(CHANGE_BILLING_DATE_THAT_USER);
  const [getBillingDateFromUser, { data: getBillingDateFromUserData }] =
    useLazyQuery(GET_BILLING_DATE_FROM_USER);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/YourAccount');

    // bir hata var bak
    const getBillingDate = async () => {
      const email = await getEmailFromLocal()[0];

      try {
        await getBillingDateFromUser({
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

    getBillingDate();
  }, [getBillingDateFromUser, getBillingDateFromUserData, toast, router]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

      {getBillingDateFromUserData ? (
        <BillingDateEditComponent
          day={day}
          setDay={setDay}
          changeBillingDateThatUser={changeBillingDateThatUser}
          changeBillingDateThatUserData={changeBillingDateThatUserData}
          getBillingDateFromUser={getBillingDateFromUser}
          getBillingDateFromUserData={getBillingDateFromUserData}
          router={router}
          toast={toast}
        />
      ) : null}
    </Box>
  );
}

export default Billingdateedit;
