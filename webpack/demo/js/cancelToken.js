import axios from 'lib/axios'

const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const url = 'https://jsonplaceholder.typicode.com/users/1'

axios.get(url, {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.error('Request canceled', thrown.message);
  } else {
    // 处理错误
    console.error(thrown)
  }
});

axios.get(url, {
  cancelToken: source.token
})

// 取消请求 (message 参数是可选的)
source.cancel('Operation canceled by the user.');
// 或
// controller.abort()



/*
  执行then方法之后，再将then方法重新赋值为then2，其执行顺序
  1.then2先执行，因为此处then是微任务，所以打印结果是then2在then之前
  2.但可以发现then的打印是按照then函数走的，而并不是then2函数
*/
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   })
// })
// then会先执行 但结果会延迟
// p.then(res => {
//   console.log(res)
// })

// p.then = function (callback) {
//   console.log(callback)
// }

// p.then()

