import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import GlobalStyle from 'styles/Global';
import Helmet from 'Helmet';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Helmet />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
