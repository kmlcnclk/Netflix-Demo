import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
// import { getUserIDFromLocal } from '../LocalStorage/userIDStorage';
import Head from 'next/head';
import AdminComponent from '../../Components/Admin/AdminComponent';
import { useState } from 'react';
import { getAdminEmailFromLocal } from '../../LocalStorage/adminEmailStorage';
import LoginComponent from '../../Components/Admin/LoginComponent';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADMIN_LOGIN } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { IS_ADMIN } from '../../GraphQL/Apollo-Client/Queries/userQueries';

function Admin() {
  const router = useRouter();

  const [adminEmailState, setAdminEmailState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [adminLogin, { data: adminLoginData }] = useMutation(ADMIN_LOGIN);

  const [isAdmin, { data: isAdminData }] = useLazyQuery(IS_ADMIN);

  const toast = useToast();

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/admin/addMovie');
    router.prefetch('/admin/addTVShow');
    router.prefetch('/admin/addTVShowCategory');
    router.prefetch('/admin/addMovieCategory');
    router.prefetch('admin/deleteMovie');
    router.prefetch('admin/deleteTVShow');
    router.prefetch('admin/deleteMovieCategory');
    router.prefetch('admin/deleteTVShowCategory');

    const email = getEmailFromLocal()[0];
    // const id = getUserIDFromLocal()[0];

    if (!email) {
      router.push('/');
    }

    const AE = getAdminEmailFromLocal()[0];

    if (AE) {
      setAdminEmailState(true);
    } else {
      setAdminEmailState(false);
    }
  }, [router, setAdminEmailState]);

  return (
    <Box bgColor="gray.100">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>

      {adminEmailState ? (
        <AdminComponent router={router} />
      ) : (
        <LoginComponent
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          adminLogin={adminLogin}
          adminLoginData={adminLoginData}
          setAdminEmailState={setAdminEmailState}
          toast={toast}
        />
      )}
    </Box>
  );
}

export default Admin;
