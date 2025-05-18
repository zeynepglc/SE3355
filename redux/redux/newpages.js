import React from "react";
import { useParams } from "react-router-dom";
import "./NewsPage.css";

const NewsPage = () => {
  const { id } = useParams();


  return (
    <div className="news-detail">
      <h2>Haber #{id}</h2>
      <img src={`https://i.ytimg.com/vi/2d6h0uJs9ns/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPo5MJOzT4jl2lbZQSYjOSXxHW4A+${id}`} alt={`News ${id}`} />
      <p>
        Diyarbakır ve Mardin'den kahreden haberler geliyor: Ferit Demir yaşanan dehşeti tek tek anlattı!
      </p>
    </div>
  );
};

export default NewsPage;
