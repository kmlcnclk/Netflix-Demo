import GiftOptionComponent from '../../Components/signup/GiftOptionComponent';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Giftoption() {
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
      <GiftOptionComponent />
    </LayoutSignup>
  );
}

export default Giftoption;
