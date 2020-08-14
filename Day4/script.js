const Username = document.getElementsByClassName('Username')
const Password = document.getElementsByClassName('Password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('Login', (e) => {
  let messages = []
  if (Username.value == '' || Username.value == null) {
    messages.push('Name is required')
  }

  if (Password.value.length <= 5) {

    messages.push('Password must be longer than 5 characters')

  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')

  }


}
})