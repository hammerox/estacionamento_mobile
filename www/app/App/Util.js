function limit(element, max_chars)
{
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90));
};
