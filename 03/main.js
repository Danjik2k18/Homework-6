var myInput = document.getElementById('txt')

myInput.oninput = function (event) {
    if(!isNaN(this.value)) {
        return this.style.color = 'green'
    }
    this.style.color = 'red'
}