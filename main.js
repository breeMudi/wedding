const btn = document.querySelector('button')
const payment = document.querySelector('.payment')

function checkStatus () {
    payment.style.opacity = 0
}
checkStatus()

function newStatus () {
    payment.style.opacity = '1'
    btn.style.backgroundColor = 'red'
}

function oldStatus () {
    payment.style.opacity = '0'
    btn.style.backgroundColor = '#fa9a85'
}

btn.addEventListener('click', e => {
    payment.style.opacity == '0' ? newStatus() : oldStatus()
})
