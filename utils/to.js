export const to = (promise) => {
  return promise
    .then((res) => [undefined, res])
    .catch((err) => [err, undefined]);
};
