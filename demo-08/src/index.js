import _ from 'lodash';
import print from './print';

function component() {
  var element = document.createElement('pre');
  print('Module Identifiers');
  element.innerHTML = 'Caching';

  return element;
}

document.body.appendChild(component());
