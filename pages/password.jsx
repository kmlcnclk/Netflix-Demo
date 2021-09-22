import React, { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import PasswordComponent from '../Components/YourAccount/PasswordComponent';
import LayoutYourAccount from '../Components/YourAccount/LayoutYourAccount';
import { CHANGE_PASSWORD } from '../GraphQL/Apollo-Client/Mutations/userMutation';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

function Password() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [requireSignIn, setRequireSignIn] = useState(false);

  const [changePassword, { data: changePasswordData }] =
    useMutation(CHANGE_PASSWORD);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/YourAccount');
    // bu sayfaya gelinceoto psh yap izin yoksa email login vs.
  }, [router]);

  return (
    <>
      <LayoutYourAccount>
        <PasswordComponent
          currentPassword={currentPassword}
          setCurrentPassword={setCurrentPassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmNewPassword={confirmNewPassword}
          setConfirmNewPassword={setConfirmNewPassword}
          requireSignIn={requireSignIn}
          setRequireSignIn={setRequireSignIn}
          changePassword={changePassword}
          changePasswordData={changePasswordData}
          toast={toast}
          router={router}
        />
      </LayoutYourAccount>
    </>
  );
}

export default Password;
