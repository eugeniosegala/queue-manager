# queue-manager
_simply test task manager_

Note: I decided to use "Promises" to simulate a realistic situation.

Basically, `reduce` within `getProcessingPage` will solve the tasks sequentially and based on the output (`resolve()` or `reject()`) the queue will proceed or will be interrupted.

To start the function, simply pass an array of states to the `getProcessingPage` function.

Although not necessary, I logged the "processing" state and I passed multiple states for testing purposes only.

```
// states example
const tasks = [
  { state: 'processing' },
  { state: 'error', errorCode: 'NO_STOCK' },
  { state: 'success' }, // not executed if rejected 
];

getProcessingPage(tasks);
```

**How to run it locally:** `node app.js`
<br>
**JS Bin:** https://jsbin.com/kaviyuribe/edit?js,console,output
