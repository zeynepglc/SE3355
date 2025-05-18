export const fetchSliderNews = async () => {
    // Gerçek API varsa fetch kullanılır
    return [
      { id: 1, title: "Kar İstanbul'da etkili oluyor", image: "https://via.placeholder.com/400x250?text=Haber+1", content: "Detaylar..." },
      { id: 2, title: "Trump'tan açıklama", image: "https://via.placeholder.com/400x250?text=Haber+2", content: "Detaylar..." },
      { id: 3, title: "Ekonomi zirvede", image: "https://via.placeholder.com/400x250?text=Haber+3", content: "Detaylar..." },
      // ...toplamda 10 tane
    ];
  };