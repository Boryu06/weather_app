import { useState } from "react";

export const useCurrentLocation = () => {
  const defaultLat = 35.15766863205245;
  const defaultLon = 129.0591996976381;

  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    // => 실행할 함수의 첫번째 매개변수는 현재 위치 정보를 가져옴

    // const lat = pos.coords.latitude;
    // const lon = pos.coords.longitude;
    // ↓↓
    const {
      coords: { latitude, longitude },
    } = pos;
    // console.log(latitude, longitude);
    // => 지역변수이기 때문에 함수 밖으로 사용할수 없음
    // => useState를 사용해 전역변수화 할수 있음

    setLat(latitude);
    setLon(longitude);
  };

  // console.log(lat, lon);

  navigator.geolocation.getCurrentPosition(location);
  // => 현재 위치를 기준으로 위도, 경도를 가져옴
  // => 매개변수에 실행할 함수명을 작성 해주면 됨

  return { lat, lon };
  // => 전역변수 처리한 변수들을 useCurrentLocation 함수를 실행할 때마다 가져올수 있음
};
