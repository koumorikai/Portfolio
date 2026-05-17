import { HashRouter, Routes, Route } from 'react-router-dom';

function main() {
  return (
    <HashRouter>
      <Routes>
        {/* Главная страница теперь будет открываться всегда по умолчанию */}
        <Route path="/" element={<Home />} />
        
        {/* Ошибка 404 сработает только на несуществующий урл */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}