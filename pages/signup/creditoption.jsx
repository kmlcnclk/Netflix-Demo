import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import CreditOptionComponent from '../../Components/signup/CreditOptionComponent';
import { CREDIT_OPTION_ADD_TO_USER } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import LayoutSignup from '../../Components/signup/LayoutSignup';

function Creditoption() {
  const [creditOptionAddToUser, { data }] = useMutation(
    CREDIT_OPTION_ADD_TO_USER
  );

  const router = useRouter();

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  useEffect(() => {
    router.prefetch('/');
    const loginState = getLoginStateFromLocal()[0];

    if (!loginState) {
      router.push('/');
    }
  }, [router]);

  const toast = useToast();

  return (
    <LayoutSignup>
      <CreditOptionComponent
        creditOptionAddToUser={creditOptionAddToUser}
        fName={fName}
        setFName={setFName}
        lName={lName}
        setLName={setLName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiry={cardExpiry}
        setCardExpiry={setCardExpiry}
        cardCVV={cardCVV}
        setCardCVV={setCardCVV}
        data={data}
        toast={toast}
        router={router}
      />
    </LayoutSignup>
  );
}

export default Creditoption;
