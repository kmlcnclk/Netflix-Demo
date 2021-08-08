import { useToast } from '@chakra-ui/react';
import React from 'react';
import RegFormComponent from '../../Components/signup/RegFormComponent';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import { IS_RECEIVED_MAIL_ALREADY } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { getEmailStateFromLocal } from '../../LocalStorage/emailStateStorage';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Regform() {
  const [register, { data }] = useMutation(REGISTER);
  const [isReceivedMailAlready, { data: isReceivedMailAlreadyData }] =
    useMutation(IS_RECEIVED_MAIL_ALREADY);

  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doNotEmailMe, setDoNotEmailMe] = useState(false);
  const [emailState, setEmailState] = useState(false);

  useEffect(() => {
    router.prefetch('/signup/');
    setEmail(getEmailFromLocal()[0]);

    var ES = getEmailStateFromLocal()[0];

    if (ES) {
      setEmailState(ES);
    }
  }, [router, setEmail, setEmailState]);

  return (
    <LayoutSignup>
      <RegFormComponent
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        register={register}
        data={data}
        doNotEmailMe={doNotEmailMe}
        setDoNotEmailMe={setDoNotEmailMe}
        router={router}
        toast={toast}
        isReceivedMailAlready={isReceivedMailAlready}
        isReceivedMailAlreadyData={isReceivedMailAlreadyData}
        emailState={emailState}
      />
    </LayoutSignup>
  );
}

export default Regform;
