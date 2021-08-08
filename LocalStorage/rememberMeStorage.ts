export const addRememberMeToLocal = (rememberMe) => {
  const getRememberMe = getRememberMeFromLocal();

  if (getRememberMe.indexOf(rememberMe) === -1 && rememberMe !== '') {
    getRememberMe.push(rememberMe);
  }

  window.localStorage.setItem('rememberMe', JSON.stringify(getRememberMe));
};

export const getRememberMeFromLocal = () => {
  let rememberMe;
  if (window.localStorage.getItem('rememberMe') === null) {
    rememberMe = [];
  } else {
    rememberMe = JSON.parse(window.localStorage.getItem('rememberMe'));
  }
  return rememberMe;
};

export const deleteRememberMeFromLocal = () => {
  window.localStorage.removeItem('rememberMe');
};
