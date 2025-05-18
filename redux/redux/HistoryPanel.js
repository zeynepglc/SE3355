import React from 'react';
import { useSelector } from 'react-redux';
import './HistoryPanel.css';

const HistoryPanel = () => {
  const history = useSelector((state) => state.history);

  if (history.length === 0) return <p>Hiç ziyaret edilen haber yok.</p>;

  return (
    <div className="history-panel">
      <h3>Son Ziyaret Edilen Haberler</h3>
      <ul>
        {history.map((title, index) => (
          <li key={index}>{title}</li>
        
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
