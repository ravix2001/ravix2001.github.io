const scriptURL = 'https://script.google.com/macros/s/AKfycbyprsAjBP_kbXJKu0p19NojPZvgHmYA0vrbK2H-HM0FV9mKEQdvvYlPIQ6QSFar7UFc/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Submitted successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})