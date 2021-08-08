export const addBrowsePageToLocal = (browsePage) => {
  const getBrowsePage = getBrowsePageFromLocal();

  if (getBrowsePage.indexOf(browsePage) === -1 && browsePage !== '') {
    getBrowsePage.push(browsePage);
  }

  window.localStorage.setItem('browsePage', JSON.stringify(getBrowsePage));
};

export const getBrowsePageFromLocal = () => {
  let browsePage;
  if (window.localStorage.getItem('browsePage') === null) {
    browsePage = [];
  } else {
    browsePage = JSON.parse(window.localStorage.getItem('browsePage'));
  }
  return browsePage;
};

export const deleteBrowsePageFromLocal = () => {
  window.localStorage.removeItem('browsePage');
};
