export const fillerEmpty = (value: any) => {
  const obj = { ...value };
  Object.keys(obj).forEach((item) => {
    !obj[item] && delete obj[item];
  });
  return obj;
};
