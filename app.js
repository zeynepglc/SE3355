import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bileşenler
import StickyAds from "./components/StickyAds";
import StickyMenu from "./components/StickyMenu";
import SliderNews from "./components/SliderNews";
import WeatherWidget from "./components/WeatherWidget";
import FinanceMenu from "./components/FinanceMenu";
import HistoryPanel from "./components/HistoryPanel";

// Sayfalar
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      {/* Sol ve sağa yapışan reklamlar */}
      <StickyAds />

      {/* Üst menü */}
      <StickyMenu />

      {/* Finans bilgileri (dinamik API'den) */}
      <FinanceMenu />

      {/* Sayfa rotaları */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderNews />
              <WeatherWidget />
              <HistoryPanel />
            </>
          }
        />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
