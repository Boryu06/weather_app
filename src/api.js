import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "3436e8faa9bbfb16ee59c4fc28787aaa",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = queryKey[1];
  // const lon = queryKey[2];
  // console.log(lat, lon);

  const [_, lat, lon] = queryKey;
  // => 배열 비구조화 할당으로 변수 처리

  // console.log(lat, lon);

  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

// *axios
// => 프론트에서 필요한 내용을 서버에 요정하는데 url필요한 변수값들을 설정할수 있음

// ex)
// axiods.create ({
//     baseUrl: "기본 수소",
//     params: {속성: 속성값}
// })
