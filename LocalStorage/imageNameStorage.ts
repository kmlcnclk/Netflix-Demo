export const addImageNameToLocal = (imageName) => {
  const getImageName = getImageNameFromLocal();

  if (getImageName.indexOf(imageName) === -1 && imageName !== '') {
    getImageName.push(imageName);
  }

  window.localStorage.setItem('imageName', JSON.stringify(getImageName));
};

export const getImageNameFromLocal = () => {
  let imageName;
  if (window.localStorage.getItem('imageName') === null) {
    imageName = [];
  } else {
    imageName = JSON.parse(window.localStorage.getItem('imageName'));
  }
  return imageName;
};

export const deleteImageNameFromLocal = () => {
  window.localStorage.removeItem('imageName');
};
