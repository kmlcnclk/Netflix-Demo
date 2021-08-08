export const addClickProfileToLocal = (clickProfile) => {
  const getClickProfile = getClickProfileFromLocal();

  if (getClickProfile.indexOf(clickProfile) === -1 && clickProfile !== '') {
    getClickProfile.push(clickProfile);
  }

  window.sessionStorage.setItem(
    'clickProfile',
    JSON.stringify(getClickProfile)
  );
};

export const getClickProfileFromLocal = () => {
  let clickProfile;
  if (window.sessionStorage.getItem('clickProfile') === null) {
    clickProfile = [];
  } else {
    clickProfile = JSON.parse(window.sessionStorage.getItem('clickProfile'));
  }
  return clickProfile;
};

export const deleteClickProfileFromLocal = () => {
  window.sessionStorage.removeItem('clickProfile');
};
