export const addRegistrationStateToLocal = (registrationState) => {
  const getRegistrationState = getRegistrationStateFromLocal();

  if (
    getRegistrationState.indexOf(registrationState) === -1 &&
    registrationState !== ''
  ) {
    getRegistrationState.push(registrationState);
  }

  window.localStorage.setItem(
    'registrationState',
    JSON.stringify(getRegistrationState)
  );
};

export const getRegistrationStateFromLocal = () => {
  let registrationState;
  if (window.localStorage.getItem('registrationState') === null) {
    registrationState = [];
  } else {
    registrationState = JSON.parse(
      window.localStorage.getItem('registrationState')
    );
  }
  return registrationState;
};

export const deleteRegistrationStateFromLocal = () => {
  window.localStorage.removeItem('registrationState');
};
