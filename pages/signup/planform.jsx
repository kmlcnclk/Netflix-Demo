import React, { useState } from 'react';
import PlanformComponent from '../../Components/signup/PlanformComponent';
import { getLoginStateFromLocal } from '../../LocalStorage/loginStateStorage';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import LayoutSignup from '../../Components/signup/LayoutSignup';
import { POST_PLAN_TO_USER } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
import { useMutation } from '@apollo/client';
import { useToast } from '@chakra-ui/react';

function Planform() {
  const [postPlanToUser, { data: postPlanToUserData }] =
    useMutation(POST_PLAN_TO_USER);

  const [basicBG, setBasicBG] = useState('#ef6b72');
  const [standardBG, setStandardBG] = useState('#ef6b72');
  const [premiumBG, setPremiumBG] = useState('#e50914');
  const [product, setProduct] = useState('Premium');
  const [basicC, setBasicC] = useState('#737373');
  const [standardC, setStandardC] = useState('#737373');

  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    router.prefetch('/signup/payment');
    router.prefetch('/signup/giftoption');
    router.prefetch('/');

    const loginState = getLoginStateFromLocal()[0];

    if (!loginState) {
      router.push('/');
    }
  }, [router]);

  const [premiumC, setPremiumC] = useState('#e50914');

  const basic = () => {
    setBasicBG('#e50914');
    setStandardBG('#ef6b72');
    setPremiumBG('#ef6b72');
    setProduct('Basic');
    setBasicC('#e50914');
    setStandardC('#737373');
    setPremiumC('#737373');
  };
  const standard = () => {
    setBasicBG('#ef6b72');
    setStandardBG('#e50914');
    setPremiumBG('#ef6b72');
    setProduct('Standard');
    setBasicC('#737373');
    setStandardC('#e50914');
    setPremiumC('#737373');
  };
  const premium = () => {
    setBasicBG('#ef6b72');
    setStandardBG('#ef6b72');
    setPremiumBG('#e50914');
    setProduct('Premium');
    setBasicC('#737373');
    setStandardC('#737373');
    setPremiumC('#e50914');
  };

  return (
    <LayoutSignup>
      <PlanformComponent
        basic={basic}
        standard={standard}
        premium={premium}
        basicBG={basicBG}
        standardBG={standardBG}
        premiumBG={premiumBG}
        product={product}
        basicC={basicC}
        standardC={standardC}
        router={router}
        premiumC={premiumC}
        postPlanToUser={postPlanToUser}
        postPlanToUserData={postPlanToUserData}
        toast={toast}
      />
    </LayoutSignup>
  );
}

export default Planform;
