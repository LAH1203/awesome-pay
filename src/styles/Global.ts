import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  button {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
  }
  header, div, section {
    display: block;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  b {
    font-weight: bold;
  }
  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
  }
  label {
    cursor: default;
  }
  input[type="number" i] {
    padding: 1px 2px;
  }
  input[type="month" i] {
    align-items: center;
    display: inline-flex;
    font-family: monospace;
    padding-inline-start: 1px;
    cursor: default;
    overflow: hidden;
    padding: 0px;
  }
  input[type="password" i] {
    -webkit-text-security: disc !important;
    padding: 1px 2px;
  }
  input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }

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
