function one() {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    })
}
function two() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

setInterval(() => {
    one()
}, 3000)

setInterval(() => {
    two()
}, 1000)