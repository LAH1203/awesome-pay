import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  transform: scale(50%);

  width: 80px;
  height: 80px;

  div {
    display: inline-block;
    position: absolute;

    width: 15px;
    background: #ff9c9c;
  }
`;

const FirstSpinner = styled.div`
  left: 8px;

  animation: loading 1s infinite;
  animation-delay: -0.4s;
`;

const SecondSpinner = styled.div`
  left: 32px;

  animation: loading 1s infinite;
  animation-delay: -0.2s;
`;

const ThirdSpinner = styled.div`
  left: 56px;

  animation: loading 1s infinite;
  animation-delay: 0;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <FirstSpinner />
      <SecondSpinner />
      <ThirdSpinner />
    </StyledSpinner>
  );
}

export default Spinner;
