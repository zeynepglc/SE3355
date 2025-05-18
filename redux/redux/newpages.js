import React from "react";
import { useParams } from "react-router-dom";
import "./NewsPage.css";

const NewsPage = () => {
  const { id } = useParams();

  // Burada gerçek API'den fetch yapabiliriz.
  // Şimdilik sahte içerik gösteriyoruz:
  return (
    <div className="news-detail">
      <h2>Haber #{id}</h2>
      <img src={`https://via.placeholder.com/800x400?text=News+${id}`} alt={`News ${id}`} />
      <p>
        Bu, haber detay sayfasıdır. Burada gerçek haber içeriği yer alacaktır.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.
      </p>
    </div>
  );
};

export default NewsPage;
