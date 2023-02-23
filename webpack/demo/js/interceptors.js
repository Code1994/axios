import axios from 'lib/axios'

axios.interceptors.request.use((config) => {
  console.log('interceptors-request')
  return config
}, (err) => {
  console.error(err)
  return err
})

axios.interceptors.response.use((response) => {
  console.log('interceptors-response')
  return response
})

axios({
  url: '/',
  transformRequest: [function (data, headers) {
    console.log('transform-request')
    return data
  }],
  transformResponse: [function (data) {
    console.log('transform-response')
    return data
  }]
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})

/*
interceptors-request
transform-request
transform-response
interceptors-response
*/
