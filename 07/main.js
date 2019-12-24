var proverka = document.getElementById("myunique")
var getClass = function() {
    if(proverka.classList.contains('www')) {
        proverka.classList.remove('www')
    } else {
        proverka.classList.add('www')
    }
}
getClass()