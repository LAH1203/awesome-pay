import { Helmet as ReactHelmet } from 'react-helmet';

function Helmet() {
  return (
    <ReactHelmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap"
        rel="stylesheet"
      />
    </ReactHelmet>
  );
}

export default Helmet;
