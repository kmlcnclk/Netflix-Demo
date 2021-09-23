import React, { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import BillingDateEditComponent from '../../Components/SimpleMember/BillingDateEditComponent';
import Head from 'next/head';
import {
  CHANGE_BILLING_DATE_THAT_USER,
  GET_BILLING_DATE_FROM_USER,
} from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

function Billingdateedit() {
  const [day, setDay] = useState('');

  const [changeBillingDateThatUser, { data: changeBillingDateThatUserData }] =
    useMutation(CHANGE_BILLING_DATE_THAT_USER);
  const [getBillingDateFromUser, { data: getBillingDateFromUserData }] =
    useMutation(GET_BILLING_DATE_FROM_USER);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/YourAccount');
  }, [getBillingDateFromUser, getBillingDateFromUserData, toast, router]);

  return (
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

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
    </Box>
  );
}

export default Billingdateedit;
