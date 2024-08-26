const worker: Worker = self as any

worker.addEventListener('message', (event) => {
  console.log('Worker Received:', event.data)
  worker.postMessage({ result: event.data})

  let count: number = 1
  while(count < 1_1000){
    count++
  }

})
