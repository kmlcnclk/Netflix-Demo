import React, { useEffect } from 'react';
import LogoutComponent from '../Components/LogoutComponent';
import { useRouter } from 'next/router';
import LayoutSignup from '../Components/signup/LayoutSignup';

function Logout() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  return (
    <LayoutSignup>
      <LogoutComponent router={router} />
    </LayoutSignup>
  );
}

export default Logout;
