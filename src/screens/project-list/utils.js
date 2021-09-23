export const fillerEmpty = (value) => {
  const obj = { ...value };
  Object.keys(obj).forEach((item) => {
    !obj[item] && delete obj[item];
  });
  return obj;
};
