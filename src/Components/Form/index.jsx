import React, { useState } from 'react';

function Form({ handleFormSubmit }) {
  // Define state for form inputs
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the callback function with form input values
    handleFormSubmit({ url, method });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <input type="submit" value="Go" />
    </form>
  );
}

export default Form;
