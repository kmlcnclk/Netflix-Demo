import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DeleteMovieCategoryComponent from '../../Components/Admin/DeleteMovieCategoryComponent';
import { useLazyQuery, useMutation } from '@apollo/client';
import { DELETE_MOVIE_CATEGORY } from '../../GraphQL/Apollo-Client/Mutations/MovieCategoryMutation';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { getAdminEmailFromLocal } from '../../LocalStorage/adminEmailStorage';
import { IS_ADMIN } from '../../GraphQL/Apollo-Client/Queries/userQueries';

function DeleteMovieCategory() {
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState('');

  const [deleteMovieCategory, { data: deleteMovieCategoryData }] = useMutation(
    DELETE_MOVIE_CATEGORY
  );

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
    <Box>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <DeleteMovieCategoryComponent
        toast={toast}
        deleteMovieCategory={deleteMovieCategory}
        deleteMovieCategoryData={deleteMovieCategoryData}
        name={name}
        setName={setName}
      />
    </Box>
  );
}

export default DeleteMovieCategory;
