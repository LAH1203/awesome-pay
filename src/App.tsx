import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Helmet from './Helmet';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
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
