export const addClickProfileIndexToLocal = (clickProfileIndex) => {
  const getClickProfileIndex = getClickProfileIndexFromLocal();

  if (
    getClickProfileIndex.indexOf(clickProfileIndex) === -1 &&
    clickProfileIndex !== ''
  ) {
    getClickProfileIndex.push(clickProfileIndex);
  }

  window.sessionStorage.setItem(
    'clickProfileIndex',
    JSON.stringify(getClickProfileIndex)
  );
};

export const getClickProfileIndexFromLocal = () => {
  let clickProfileIndex;
  if (window.sessionStorage.getItem('clickProfileIndex') === null) {
    clickProfileIndex = [];
  } else {
    clickProfileIndex = JSON.parse(
      window.sessionStorage.getItem('clickProfileIndex')
    );
  }
  return clickProfileIndex;
};

export const deleteClickProfileIndexFromLocal = () => {
  window.sessionStorage.removeItem('clickProfileIndex');
};
