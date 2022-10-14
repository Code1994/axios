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





