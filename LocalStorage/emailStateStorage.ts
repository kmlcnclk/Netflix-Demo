export const addEmailStateToLocal = (emailState) => {
  const getEmailState = getEmailStateFromLocal();

  if (getEmailState.indexOf(emailState) === -1 && emailState !== '') {
    getEmailState.push(emailState);
  }

  window.localStorage.setItem('emailState', JSON.stringify(getEmailState));
};

export const getEmailStateFromLocal = () => {
  let emailState;
  if (window.localStorage.getItem('emailState') === null) {
    emailState = [];
  } else {
    emailState = JSON.parse(window.localStorage.getItem('emailState'));
  }
  return emailState;
};

export const deleteEmailStateFromLocal = () => {
  window.localStorage.removeItem('emailState');
};
