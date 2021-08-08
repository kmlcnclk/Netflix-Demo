import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import AddTVShowCategoryComponent from '../../Components/Admin/AddTVShowCategoryComponent';
import { ADD_TVSHOW_CATEGORY } from '../../GraphQL/Apollo-Client/Mutations/TVShowCategoryMutation';
import { IS_ADMIN } from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { getAdminEmailFromLocal } from '../../LocalStorage/adminEmailStorage';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

function AddTVShowCategory() {
  const router = useRouter();

  const [name, setName] = useState('');

  const [addTVShowCategory, { data: addTVShowCategoryData }] =
    useMutation(ADD_TVSHOW_CATEGORY);

  const toast = useToast();

  const [isAdmin, { data: isAdminData }] = useLazyQuery(IS_ADMIN);

  useEffect(() => {
    router.prefetch('/');

    const email = getEmailFromLocal()[0];

    const AE = getAdminEmailFromLocal()[0];

    if (!email || !AE) {
      router.push('/');
    }
    const isAdminFunc = async () => {
      const adminEmail = await getAdminEmailFromLocal()[0];

      try {
        await isAdmin({
          variables: {
            adminEmail: adminEmail,
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

      if (isAdminData) {
        if (!isAdminData.isAdmin.success) {
          router.push('/');
        }
      }
    };

    isAdminFunc();
  }, [router, isAdmin, isAdminData, toast]);

  return (
    <Box bgColor="gray.100">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <AddTVShowCategoryComponent
        toast={toast}
        name={name}
        setName={setName}
        addTVShowCategory={addTVShowCategory}
        addTVShowCategoryData={addTVShowCategoryData}
      />
    </Box>
  );
}

export default AddTVShowCategory;
