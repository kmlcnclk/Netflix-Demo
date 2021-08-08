export const addAdminEmailToLocal = (adminEmail) => {
  const getAdminEmail = getAdminEmailFromLocal();

  if (getAdminEmail.indexOf(adminEmail) === -1 && adminEmail !== '') {
    getAdminEmail.push(adminEmail);
  }

  window.localStorage.setItem('adminEmail', JSON.stringify(getAdminEmail));
};

export const getAdminEmailFromLocal = () => {
  let adminEmail;
  if (window.localStorage.getItem('adminEmail') === null) {
    adminEmail = [];
  } else {
    adminEmail = JSON.parse(window.localStorage.getItem('adminEmail'));
  }
  return adminEmail;
};

export const deleteAdminEmailFromLocal = () => {
  window.localStorage.removeItem('adminEmail');
};
