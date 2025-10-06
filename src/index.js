import FetchAPI from "./API_function/fetch-API-data.js";
import ImportIcon from "./API_function/import-icon.js";
import LocationValidation from "./API_function/location-validation.js";
import "./css/general.css";

const inputLocation = document.querySelector("#location");
const locationForm = document.querySelector("#locationForm");
const weatherIcon = document.querySelector("#weatherIcon");
const formContainer = document.querySelector(".form-container");
const weatherInfoChild = document.querySelectorAll(".weather-info > div");

const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const tempmax = document.querySelector(".tempmax");
const tempmin = document.querySelector(".tempmin");
const feelslike = document.querySelector(".feelslike");
const condition = document.querySelector(".condition");
const description = document.querySelector(".description");
const requiredError = document.querySelector(".required-error");

const clearBtn = document.querySelector(".clear-button");

const fetchAPI = new FetchAPI();
const importIcon = new ImportIcon();
const locationValidation = new LocationValidation();

inputLocation.addEventListener("input", () =>
  locationValidation.validation(inputLocation, requiredError, formContainer)
);

locationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const weatherInfo = await fetchAPI.getInfo(inputLocation.value);
  date.textContent = weatherInfo.date;
  temp.textContent = `Temp: ${weatherInfo.temp}`;
  tempmax.textContent = `Temp-max: ${weatherInfo.tempmax}`;
  tempmin.textContent = `Temp-min: ${weatherInfo.tempmin}`;
  feelslike.textContent = `Feelslike: ${weatherInfo.feelslike}`;
  condition.textContent = weatherInfo.condition;
  description.textContent = weatherInfo.description;

  importIcon.changeIcon(weatherIcon, weatherInfo);

  weatherInfoChild.forEach((child) => {
    child.classList.add("active");
  });
});

clearBtn.addEventListener("click", () => {
  inputLocation.value = "";
});
