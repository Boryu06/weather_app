import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  background: rgb(166, 166, 255);
  background: linear-gradient(
    24deg,
    rgba(35, 147, 255, 1) 0%,
    rgba(152, 235, 255, 1) 100%
  );
  color: white;
  padding: 20% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const City = styled.div`
  font-size: 40px;
`;

const Temp = styled.div`
  font-size: 90px;
  margin-left: 30px;
`;

const Desc = styled.div`
  font-size: 24px;
`;

const Separ = styled.div`
  width: 50px;
  height: 3px;
  background-color: #ffffff;
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Con = styled.div`
  width: 33%;
  border-right: 1px solid rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 1.5em;
  opacity: 0.7;
  p:nth-child(2) {
    font-weight: 600;
  }
  &:last-child {
    border: none;
  }
`;

export const Weather = ({ data }) => {
  return (
    <Wrap>
      <City>{data.name}</City>
      <Temp>{Math.round(data.main.temp)}°</Temp>
      <Desc>{data.weather[0].description}</Desc>
      <Separ></Separ>
      <ConWrap>
        <Con>
          <p>체감온도</p>
          <p>{Math.round(data.main.feels_like)}°</p>
        </Con>
        <Con>
          <p>최저온도</p>
          <p>{Math.round(data.main.temp_min)}°</p>
        </Con>
        <Con>
          <p>최고온도</p>
          <p>{Math.round(data.main.temp_max)}°</p>
        </Con>
      </ConWrap>
    </Wrap>
  );
};
