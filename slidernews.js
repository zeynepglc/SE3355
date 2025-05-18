import React, { useEffect, useState } from "react";
import { fetchSliderNews } from "../api/newsAPI";
import "./SliderNews.css";

const SliderNews = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchSliderNews().then((data) => setNews(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [news]);

  if (news.length === 0) return <div>Yükleniyor...</div>;

  return (
    <div className="slider-container">
      <div className="slider-item" key={news[currentIndex].id}>
        <a href={`/news/${news[currentIndex].id}`}>
          <img src={news[currentIndex].image} alt={news[currentIndex].title} />
          <div className="headline">{news[currentIndex].title}</div>
        </a>
      </div>
    </div>
  );
};

export default SliderNews;
