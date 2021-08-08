import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import AddMovieComponent from '../../Components/Admin/AddMovieComponent';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_MOVIE } from '../../GraphQL/Apollo-Client/Mutations/MovieMutation';
import { IS_ADMIN } from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { getAdminEmailFromLocal } from '../../LocalStorage/adminEmailStorage';

function AddMovie() {
  const router = useRouter();

  const toast = useToast();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [duration, setDuration] = useState([]);
  const [movieUrl, setMovieUrl] = useState([]);
  const [category, setCategory] = useState([]);
  const [ageLimit, setAgeLimit] = useState('');

  const [addMovie, { data: addMovieData }] = useMutation(ADD_MOVIE);

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
    <Box bgColor="gray.100" w="full" h="full">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <AddMovieComponent
        addMovie={addMovie}
        addMovieData={addMovieData}
        toast={toast}
        name={name}
        setName={setName}
        content={content}
        setContent={setContent}
        duration={duration}
        setDuration={setDuration}
        movieUrl={movieUrl}
        setMovieUrl={setMovieUrl}
        category={category}
        setCategory={setCategory}
        ageLimit={ageLimit}
        setAgeLimit={setAgeLimit}
      />
    </Box>
  );
}

export default AddMovie;
