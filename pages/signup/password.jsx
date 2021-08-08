import { useToast } from '@chakra-ui/react';
import PasswordComponent from '../../Components/signup/PasswordComponent';
import React from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { LOGIN } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { getEmailStateFromLocal } from '../../LocalStorage/emailStateStorage';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Password() {
  const [login, { data }] = useMutation(LOGIN);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState(false);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/signup/');

    setEmail(getEmailFromLocal()[0]);

    var LS = getLoginStateFromLocal()[0];

    if (LS) {
      setLoginState(LS);
    }
  }, [router, setEmail, setLoginState]);

  return (
    <LayoutSignup>
      <PasswordComponent
        login={login}
        data={data}
        toast={toast}
        router={router}
        password={password}
        setPassword={setPassword}
        email={email}
        loginState={loginState}
      />
    </LayoutSignup>
  );
}

export default Password;
