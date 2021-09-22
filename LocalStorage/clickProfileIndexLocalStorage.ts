export const addClickProfileIndexToLS = (clickProfileIndexLS) => {
  const getClickProfileIndexLS = getClickProfileIndexFromLS();

  if (
    getClickProfileIndexLS.indexOf(clickProfileIndexLS) === -1 &&
    clickProfileIndexLS !== ''
  ) {
    getClickProfileIndexLS.push(clickProfileIndexLS);
  }

  window.localStorage.setItem(
    'clickProfileIndexLS',
    JSON.stringify(getClickProfileIndexLS)
  );
};

export const getClickProfileIndexFromLS = () => {
  let clickProfileIndexLS;
  if (window.localStorage.getItem('clickProfileIndexLS') === null) {
    clickProfileIndexLS = [];
  } else {
    clickProfileIndexLS = JSON.parse(
      window.localStorage.getItem('clickProfileIndexLS')
    );
  }
  return clickProfileIndexLS;
};

export const deleteClickProfileIndexFromLS = () => {
  window.localStorage.removeItem('clickProfileIndexLS');
};
