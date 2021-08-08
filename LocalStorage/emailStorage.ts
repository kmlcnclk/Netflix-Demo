export const addEmailToLocal = (email) => {
  const getEmail = getEmailFromLocal();

  if (getEmail.indexOf(email) === -1 && email !== '') {
    getEmail.push(email);
  }

  window.localStorage.setItem('email', JSON.stringify(getEmail));
};

export const getEmailFromLocal = () => {
  let email;
  if (window.localStorage.getItem('email') === null) {
    email = [];
  } else {
    email = JSON.parse(window.localStorage.getItem('email'));
  }
  return email;
};

export const deleteEmailFromLocal = () => {
  window.localStorage.removeItem('email');
};
