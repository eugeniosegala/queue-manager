# queue-manager
_simply test task manages_

Note: I decided to use "Promises" to simulate a realistic situation.

Basically, `reduce` within `getProcessingPage` will solve the tasks sequentially and based on the output (`resolve()` or `reject()`) the queue will proceed or will be interrupted.

To start the function, simply pass an array of states to the `getProcessingPage` function.

Although not necessary, I logged the "processing" state and I passed multiple states for testing purposes only.

```
// states example
var tasks = [
  { state: 'processing' },
  { state: 'error', errorCode: 'NO_STOCK' },
  { state: 'success' },
];

getProcessingPage(tasks);
```

**How to run it locally:** `node app.js`
<br>
**JS Bin:** https://jsbin.com/wunosaveki/1/edit?js,console,output
