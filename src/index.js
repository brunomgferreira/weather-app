import './styles/main.css';
import view from './modules/view';
import weather from './modules/weather';

const weatherData = await weather.getData('trofa');
view.setSearchResult(weatherData);

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = 'Hello webpack';
  
    return element;
  }
  
  // document.body.appendChild(component());