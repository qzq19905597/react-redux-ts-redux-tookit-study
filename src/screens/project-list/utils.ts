export const fillerEmpty = <T>(value: T) => {
  const obj = { ...value };
  Object.keys(obj).forEach((item) => {
    console.log(item);
    !obj[item as keyof T] && delete obj[item as keyof T];
  });
  return obj;
};
