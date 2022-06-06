import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes dungdung {
    0% {
      transform: translate(0, 2.5px);
    }
    100% {
      transform: translate(0, -2.5px);
    }
  }

  @keyframes blowUpModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes loading {
    0% {
      top: 8px;
      height: 50px;
    }
    10% {
      top: 16px;
      height: 45px;
    }
    20% {
      top: 24px;
      height: 40px;
    }
    30% {
      top: 32px;
      height: 35px;
    }
    40% {
      top: 40px;
      height: 30px;
    }
    50% {
      top: 48px;
      height: 25px;
    }
    60% {
      top: 40px;
      height: 30px;
    }
    70% {
      top: 32px;
      height: 35px;
    }
    80% {
      top: 24px;
      height: 40px;
    }
    90% {
      top: 16px;
      height: 45px;
    }
    100% {
      top: 8px;
      height: 50px;
    }
  }

  @keyframes selectBoxFadein {
    from {
      opacity: 0;
      top: 150px;
    }
    to {
      opacity: 1;
      top: 160px;
    }
  }
`;

export default GlobalStyle;
