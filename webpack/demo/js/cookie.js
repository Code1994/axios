function ajax (method = 'GET', url, { data = {}, json = false, headers = {}, async = true, success, error } = {}, config = {},) {
  var xhr = new XMLHttpRequest()
  if (method === 'GET') {
    var list = []
    for (const key in data) {
      list.push(`${key}=${data[key]}`)
    }
    list.length && (url = `${url}?${list.join('&')}`)
    data = null
  }
  xhr.open(method, url, async)
  // xhr.upload.onprogress = function(event) {
  //   console.log(`Uploaded ${event.loaded} of ${event.total} bytes`)
  // }
  // xhr.upload.onload = function() {
  //   console.log(`Upload finished successfully.`)
  // }
  // xhr.upload.onerror = function() {
  //   console.log(`Error during the upload: ${xhr.status}`)
  // }
  if (json && data) {
    data = JSON.stringify(data)
    xhr.setRequestHeader('content-type', 'application/json')
  }
  for (const k in headers) {
    xhr.setRequestHeader(k, headers[k])
  }
  for (const k in config) {
    xhr[k] = config[k]
  }
  xhr.send(data)
  xhr.onreadystatechange = function (e) {
    console.log('readystate')
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(this)
      }
    }
  }
  xhr.onprogress = function (e) {
    console.log('progress', e)
  }
  xhr.onload = function () {
    console.log('load')
    success && success()
  }
  xhr.onerror = function () {
    console.log('error')
    error && error()
  }
  xhr.ontimeout = function () {
    console.log('timeout')
  }
  xhr.onabort = function () {
    console.log('abort')
  }
  return xhr
}

ajax('POST', 'https://localhost:3000/save', {}, { withCredentials: true })

