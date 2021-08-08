import React from 'react';
import { useToast } from '@chakra-ui/react';
import LoginComponent from '../Components/LoginComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { getEmailFromLocal } from '../LocalStorage/emailStorage';
import { LOGIN } from '../GraphQL/Apollo-Client/Mutations/userMutation';
import { useLazyQuery, useMutation } from '@apollo/client';
import LayoutSignup from '../Components/signup/LayoutSignup';
import { getRememberMeFromLocal } from '../LocalStorage/rememberMeStorage';
import { REMEMBER_ME } from '../GraphQL/Apollo-Client/Queries/userQueries';
import { useRouter } from 'next/dist/client/router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [rememberMeQuery, { data: rememberMeData }] = useLazyQuery(REMEMBER_ME);

  const [login, { data }] = useMutation(LOGIN);

  const toast = useToast();

  const router = useRouter();

  useEffect(() => {
    router.prefetch('/browse');
    router.prefetch('/');

    const rememberMeFunc = async () => {
      const rememberMeStorage = await getRememberMeFromLocal()[0];

      const emailStorage = await getEmailFromLocal()[0];

      if (emailStorage) {
        await setEmail(emailStorage);

        if (rememberMeStorage) {
          try {
            await rememberMeQuery({
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

          if (rememberMeData) {
            setPassword(rememberMeData.rememberMe.password);
          }
        }
      }
    };

    rememberMeFunc();
  }, [setEmail, rememberMeQuery, rememberMeData, email, toast, router]);

  return (
    <LayoutSignup>
      <LoginComponent
        login={login}
        data={data}
        email={email}
        toast={toast}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        router={router}
      />
    </LayoutSignup>
  );
}

export default Login;
