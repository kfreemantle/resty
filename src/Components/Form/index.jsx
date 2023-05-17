import React, { useState } from 'react';

import './Form.scss';

const Form = ({ handleApiCall }) => {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={e => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
