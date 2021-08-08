export const addRegistrationPhaseToLocal = (registrationPhase) => {
  const getRegistrationPhase = getRegistrationPhaseFromLocal();

  if (
    getRegistrationPhase.indexOf(registrationPhase) === -1 &&
    registrationPhase !== ''
  ) {
    getRegistrationPhase.push(registrationPhase);
  }

  window.localStorage.setItem(
    'registrationPhase',
    JSON.stringify(getRegistrationPhase)
  );
};

export const getRegistrationPhaseFromLocal = () => {
  let registrationPhase;
  if (window.localStorage.getItem('registrationPhase') === null) {
    registrationPhase = [];
  } else {
    registrationPhase = JSON.parse(
      window.localStorage.getItem('registrationPhase')
    );
  }
  return registrationPhase;
};

export const deleteRegistrationPhaseFromLocal = () => {
  window.localStorage.removeItem('registrationPhase');
};
