import Head from 'next/head';
import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import IndexComponent from '../Components/IndexComponent';
import { useMutation } from '@apollo/client';
import { REGISTRATION_PHASE_STATE } from '../GraphQL/Apollo-Client/Mutations/userMutation';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { getRegistrationStateFromLocal } from '../LocalStorage/registrationStateStorage';

export default function Home() {
  const { isOpen: a1, onToggle: a2 } = useDisclosure();
  const { isOpen: b1, onToggle: b2 } = useDisclosure();
  const { isOpen: c1, onToggle: c2 } = useDisclosure();
  const { isOpen: d1, onToggle: d2 } = useDisclosure();
  const { isOpen: e1, onToggle: e2 } = useDisclosure();
  const { isOpen: f1, onToggle: f2 } = useDisclosure();

  const [a11, setA11] = useState(true);
  const [b11, setB11] = useState(true);
  const [c11, setC11] = useState(true);
  const [d11, setD11] = useState(true);
  const [e11, setE11] = useState(true);
  const [f11, setF11] = useState(true);

  const [email, setEmail] = useState('');

  const router = useRouter();

  const [registrationPhaseState, { data }] = useMutation(
    REGISTRATION_PHASE_STATE
  );

  const isOpen = (i) => {
    if (i === 0) {
      return a1;
    } else if (i === 1) {
      return b1;
    } else if (i === 2) {
      return c1;
    } else if (i === 3) {
      return d1;
    } else if (i === 4) {
      return e1;
    } else {
      return f1;
    }
  };

  const onToggle = (i) => {
    if (i === 0) {
      return a2;
    } else if (i === 1) {
      return b2;
    } else if (i === 2) {
      return c2;
    } else if (i === 3) {
      return d2;
    } else if (i === 4) {
      return e2;
    } else {
      return f2;
    }
  };

  const setIconState = (i) => {
    if (i === 0) {
      setA11(!a11);
    } else if (i === 1) {
      setB11(!b11);
    } else if (i === 2) {
      setC11(!c11);
    } else if (i === 3) {
      setD11(!d11);
    } else if (i === 4) {
      setE11(!e11);
    } else {
      setF11(!f11);
    }
  };

  const iconState = (i) => {
    if (i === 0) {
      return a11;
    } else if (i === 1) {
      return b11;
    } else if (i === 2) {
      return c11;
    } else if (i === 3) {
      return d11;
    } else if (i === 4) {
      return e11;
    } else {
      return f11;
    }
  };

  const toast = useToast();

  useEffect(() => {
    router.prefetch('/browse');

    const rs = getRegistrationStateFromLocal()[0];

    if (rs) {
      router.push('/browse');
    }

    router.prefetch('/signup/registration');
    router.prefetch('/signup/');
    router.prefetch('/signup/payment');
    router.prefetch('/signup/planform');
  }, [router]);

  return (
    <Box bgColor="black">
      <Head>
        <title>
          Netflix Türkiye - TV Programlarını Çevrimiçi İzleyin, Filmleri
          Çevrimiçi İzleyin
        </title>
        <meta
          name="description"
          content="Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir.Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!"
        />
        <link rel="icon" href="/netflix.png" />
      </Head>
      <IndexComponent
        isOpen={isOpen}
        onToggle={onToggle}
        setIconState={setIconState}
        iconState={iconState}
        email={email}
        setEmail={setEmail}
        registrationPhaseState={registrationPhaseState}
        data={data}
        toast={toast}
        router={router}
      />
    </Box>
  );
}
