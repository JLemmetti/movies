export const wait = (delay: number) =>
  new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
