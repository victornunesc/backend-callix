import retry from "retry";

export const retryPolicy =
  (retries = 3, factor = 2) =>
  (_: Object, __: string, descriptor: PropertyDescriptor): object => {
    const originalMethod = descriptor.value;
    const operation = retry.operation({ retries: retries, factor: factor });

    descriptor.value = function (...args: any[]) {
      return new Promise((resolve, reject) => {
        operation.attempt(async function (currentAttempt) {
          try {
            const result = await originalMethod(...args);
            resolve(result);
          } catch (err: any) {
            console.log(
              `attempt #${currentAttempt} failed. error: ${err.message}`
            );
            if (operation.retry(err)) {
              return;
            }
            reject(err);
          }
        });
      });
    };

    return descriptor;
  };
