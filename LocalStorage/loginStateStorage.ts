export const addLoginStateToLocal = (loginState) => {
  const getLoginState = getLoginStateFromLocal();

  if (getLoginState.indexOf(loginState) === -1 && loginState !== '') {
    getLoginState.push(loginState);
  }

  window.localStorage.setItem('loginState', JSON.stringify(getLoginState));
};

export const getLoginStateFromLocal = () => {
  let loginState;
  if (window.localStorage.getItem('loginState') === null) {
    loginState = [];
  } else {
    loginState = JSON.parse(window.localStorage.getItem('loginState'));
  }
  return loginState;
};

export const deleteLoginStateFromLocal = () => {
  window.localStorage.removeItem('loginState');
};
