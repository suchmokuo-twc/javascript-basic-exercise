export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  if (promises.some(p => !(p instanceof Promise))) {
    throw new Error('Not all elements are promises.');
  }

  return new Promise((resolve, reject) => {
    let remain = promises.length;
    let rejected = false;

    if (remain === 0) {
      resolve();
      return;
    }

    promises.forEach((p) => {
      p.catch(() => {
        rejected = true;
      }).finally(() => {
        remain -= 1;

        if (remain === 0) {
          if (rejected) {
            reject();
          } else {
            resolve();
          }
        }
      });
    });
  });
}
