var proverka = document.getElementById("myunique")
var getClass = function() {
    if(proverka.classList.contains('www')) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}
getClass()