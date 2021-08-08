import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import PaymentComponent from '../../Components/signup/PaymentComponent';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Payment() {
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
      <PaymentComponent />
    </LayoutSignup>
  );
}

export default Payment;
