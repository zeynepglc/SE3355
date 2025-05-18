export const fetchWeatherData = async () => {
    // Gerçek API varsa fetch ile çağırabilirsin
    return [
      { day: "Pzt", temp: "16°", icon: "☀️" },
      { day: "Sal", temp: "18°", icon: "🌤️" },
      { day: "Çar", temp: "14°", icon: "🌧️" },
      { day: "Per", temp: "17°", icon: "🌦️" },
      { day: "Cum", temp: "13°", icon: "⛅" }
    ];
  };