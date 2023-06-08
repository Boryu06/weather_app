import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { Layout } from "../components/Layout";
import { Weather } from "../components/Weather";
import { Loading } from "../components/Loading";
import { useCurrentLocation } from "../lib/useCurrentLocation";

export const Home = () => {
  // const lat = 35.15766863205245;
  // const lon = 129.0591996976381;
  // ↓↓
  const { lat, lon } = useCurrentLocation();
  // console.log(lat);
  // console.log(lon);

  const { data, isLoading } = useQuery(["weather", lat, lon], getWeather);
  // => api에 요청할때 사용하는 hook
  // => useQuery([queryKey], 요청할 함수)

  // console.log(isLoading);
  // => api에 요청할때 로딩중이면 true, 로딩이 끝나면 false값으로 반환함

  // console.log(data);
  // => 요청후 전달된 데이터 값이 data변수에 저장됨

  return <Layout>{isLoading ? <Loading /> : <Weather data={data} />}</Layout>;
};
