import { Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather/:cityName" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;