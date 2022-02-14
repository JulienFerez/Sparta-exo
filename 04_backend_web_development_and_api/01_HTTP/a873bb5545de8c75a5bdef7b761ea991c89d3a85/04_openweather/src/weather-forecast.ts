import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: number, countryCode: string): void {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(html);
        console.log(data.main);
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  // code the function here
  request(
    `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&lang=fr`,
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(html);
        console.log(`${Math.round(data.main.temp)}°C`);
      }
    },
  );
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
