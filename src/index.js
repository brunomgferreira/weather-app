import './styles/main.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = 'Hello webpack';
  
    return element;
  }
  
  // document.body.appendChild(component());