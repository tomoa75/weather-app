import iconDrizzle from "./assets/images/icon-drizzle.webp";
import iconFog from "./assets/images/icon-fog.webp";
import iconRain from "./assets/images/icon-rain.webp";
import iconSnow from "./assets/images/icon-snow.webp";
import iconStorm from "./assets/images/icon-storm.webp";
import iconOvercast from "./assets/images/icon-overcast.webp";
import iconPartlyCloudy from "./assets/images/icon-partly-cloudy.webp";
import iconSunny from "./assets/images/icon-sunny.webp";
export function getWeatherIcon(code) {
  if (code === 0) return iconSunny;
  if (code >= 1 && code <= 3) return iconPartlyCloudy;
  if (code >= 45 && code <= 48) return iconFog;
  if (code >= 51 && code <= 57) return iconDrizzle;
  if (code >= 61 && code <= 67) return iconRain;
  if (code >= 71 && code <= 77) return iconSnow;
  if (code >= 80 && code <= 82) return iconStorm;
  if (code >= 95) return iconOvercast;
  return "❓";
}
