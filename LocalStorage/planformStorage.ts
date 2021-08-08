export const addPlanToLocal = (plan) => {
  const getPlan = getPlanFromLocal();

  if (getPlan.indexOf(plan) === -1 && plan !== '') {
    getPlan.push(plan);
  }

  window.localStorage.setItem('plan', JSON.stringify(getPlan));
};

export const getPlanFromLocal = () => {
  let plan;
  if (window.localStorage.getItem('plan') === null) {
    plan = [];
  } else {
    plan = JSON.parse(window.localStorage.getItem('plan'));
  }
  return plan;
};

export const deletePlanFromLocal = () => {
  window.localStorage.removeItem('plan');
};
