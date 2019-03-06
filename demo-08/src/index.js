function component() {
  var element = document.createElement('pre');

  element.innerHTML = 'Caching ...';

  return element;
}

document.body.appendChild(component());
