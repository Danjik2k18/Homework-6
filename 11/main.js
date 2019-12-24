var elem = document.getElementsByClassName('www');
function addName(elements) {
  for(var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].innerHTML + ' ' + elements[i].tagName.toLowerCase();
  }
}
addName(elem)