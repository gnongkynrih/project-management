export const cleanObject = (obj: Object) => {
  const filterEntries = Object.entries(obj).filter(
    ([_, value]) => value !== undefined && value !== "",
  );
  return Object.fromEntries(filterEntries);
};
