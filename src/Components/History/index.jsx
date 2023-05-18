import React from 'react';

const History = ({ history, onRerun }) => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <button onClick={() => onRerun(item.params)}> {/* When the user clicks, re-run the API call */}
              {item.params.method} {item.params.url}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
