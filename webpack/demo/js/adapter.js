import axios from 'lib/axios'

axios({
  url: '/api/'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})
