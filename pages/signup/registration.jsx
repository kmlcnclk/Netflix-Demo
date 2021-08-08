import React, { useEffect } from 'react';
import RegistrationComponent from '../../Components/signup/RegistrationComponent';
import { useRouter } from 'next/dist/client/router';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Registration() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/signup/regform');
  }, [router]);

  return (
    <LayoutSignup>
      <RegistrationComponent router={router} />
    </LayoutSignup>
  );
}

export default Registration;
