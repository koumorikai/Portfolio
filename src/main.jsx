import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Теперь при переходе на сайт будет открываться главная */}
        <Route path="/" element={<Home />} />
        
        {/* Ошибка 404 выскочит только если юзер введет бред в урл */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}