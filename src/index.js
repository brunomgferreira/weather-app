import './styles/main.css';
import view from './modules/view';
import weather from './modules/weather';

const weatherData = await weather.getData('porto portugal');
view.setSearchResult(weatherData);

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async() => {
  if (searchInput.value === "") return;
  const weatherData = await weather.getData(searchInput.value);
  view.setSearchResult(weatherData);
});