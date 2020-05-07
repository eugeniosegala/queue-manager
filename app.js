
const errorCodeDictionary = {
  'NO_STOCK': 'No stock has been found',
  'INCORRECT_DETAILS': 'Incorrect details have been entered',
};

const jobManager = (currentTask) => {
  return () => {
    return new Promise((resolve) => {
      if (currentTask.state === "processing") { // demo purposes
        console.log(currentTask);
        resolve();
      } else {
        setTimeout(() => {
          console.log({
            title: currentTask.state === "error" ? 'Error page' : 'Order complete',
            message: errorCodeDictionary[currentTask.errorCode] || null
          });
          // reject() will stop the queue
          resolve();
        }, 2000);
      }
    })
  }
};

const getProcessingPage = (data) => {
  return data.reduce((acc, currentTask) => acc.then(jobManager(currentTask)), Promise.resolve());
};

// example list
const tasks = [
  { state: 'processing' },
  { state: 'error', errorCode: 'NO_STOCK' },
  { state: 'success' }, // example
];

getProcessingPage(tasks);
