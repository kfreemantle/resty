import React from 'react';

function Results({ data }) {
  return (
    <div className="results">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


export default Results;
