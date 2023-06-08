import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ani = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid royalblue;
  border-radius: 50%;
  border-color: royalblue lightgray lightgray lightgray;
  animation: ${Ani} 1s infinite;
`;

export const Loading = () => {
  return (
    <Wrap>
      <Loader />
    </Wrap>
  );
};
