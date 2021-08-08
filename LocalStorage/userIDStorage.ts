export const addUserIDToLocal = (userID) => {
  const getUserID = getUserIDFromLocal();

  if (getUserID.indexOf(userID) === -1 && userID !== '') {
    getUserID.push(userID);
  }

  window.localStorage.setItem('userID', JSON.stringify(getUserID));
};

export const getUserIDFromLocal = () => {
  let userID;
  if (window.localStorage.getItem('userID') === null) {
    userID = [];
  } else {
    userID = JSON.parse(window.localStorage.getItem('userID'));
  }
  return userID;
};

export const deleteUserIDFromLocal = () => {
  window.localStorage.removeItem('userID');
};
