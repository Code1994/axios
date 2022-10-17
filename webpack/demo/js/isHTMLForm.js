const form = document.querySelector('#form')

console.dir(form)
// HTMLFormElement
console.log(Object.prototype.toString.call(form))

console.log(new FormData(form))

const formData = new FormData(form)

console.log(formData.entries())

for (const [key, value] of formData.entries()) {
  console.log(key, value)
}

