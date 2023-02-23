let promise = Promise.resolve('hello world')

const resolve = (config) => {
  // console.log(config)
  return config
}

const reject = (err) => {
  return err
}

const dispatchRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() * 10 > 5) {
      resolve(true)
    } else {
      reject(false)
    }
  }, 1000)
}).then(res => {
  console.log('dispatchRequest', res)
}, err => {
  console.error('dispatchRequest', err)
})

const list = [resolve, reject, dispatchRequest, undefined]

let i = 0
let { length } = list

while(i < length) {
  promise = promise.then(list[i++], list[i++])
  console.error('while', promise)
}

console.log(promise)
promise.then(res => {
  console.log(res)
}, err => {
  console.error(err)
})



/*
1.fulfilled占位，如果不是函数，会被忽略。then的返回值会是上一次resolve或者reject的值。
Promise.resolve('hello world').then(Promise.reject('error'))

2.与fulfilled平级的rejected能够检测到fulfilled中的错误。而且fulfilled中的错误只有主动catch才能捕获到，浏览器不能正常检测语法。
promise.then(fulfilled, rejected)

promise.then(fulfilled)

*/

