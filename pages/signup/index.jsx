import React, { useEffect } from 'react';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import { useRouter } from 'next/dist/client/router';
import IndexComponent from '../../Components/signup/IndexComponent';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    const loginState = getLoginStateFromLocal()[0];

    if (!loginState) {
      router.push('/');
    }
  }, [router]);

  return (
    <LayoutSignup>
      <IndexComponent />
    </LayoutSignup>
  );
}

export default Index;
