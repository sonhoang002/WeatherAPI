export default class FetchAPI {
  constructor() {
    this.infoArray = {};
  }
  async getInfo(inputValue) {
    const weatherInfo = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}/today?key=65EQAUL3JWVT3ZF5STCDWVJHA&include=days&elements=conditions,description,icon,datetime,temp,tempmax,tempmin,feelslike`
    );
    const weatherInfoJson = await weatherInfo.json();
    console.log(weatherInfoJson);
    this.infoArray = {
      condition: weatherInfoJson.days[0].conditions,
      icon: weatherInfoJson.days[0].icon,
      description: weatherInfoJson.days[0].description,
      date: weatherInfoJson.days[0].datetime,
      tempmin: weatherInfoJson.days[0].tempmin,
      tempmax: weatherInfoJson.days[0].tempmax,
      temp: weatherInfoJson.days[0].temp,
      feelslike: weatherInfoJson.days[0].feelslike,
    };
    return this.infoArray;
  }
}
