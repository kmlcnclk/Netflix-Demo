export const addImageUrlToLocal = (imageUrl) => {
  const getImageUrl = getImageUrlFromLocal();

  if (getImageUrl.indexOf(imageUrl) === -1 && imageUrl !== '') {
    getImageUrl.push(imageUrl);
  }

  window.localStorage.setItem('imageUrl', JSON.stringify(getImageUrl));
};

export const getImageUrlFromLocal = () => {
  let imageUrl;
  if (window.localStorage.getItem('imageUrl') === null) {
    imageUrl = [];
  } else {
    imageUrl = JSON.parse(window.localStorage.getItem('imageUrl'));
  }
  return imageUrl;
};

export const deleteImageUrlFromLocal = () => {
  window.localStorage.removeItem('imageUrl');
};
