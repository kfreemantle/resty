import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Results from './Components/Results';
import Footer from './Components/Footer';

function App() {
  // Define states
  const [requestParams, setRequestParams] = useState({});
  const [apiResults, setApiResults] = useState({});

  // Callback function to handle form submission
  const handleFormSubmit = (params) => {
    setRequestParams(params);
  }

  // useEffect to run API call whenever requestParams changes
  useEffect(() => {
    // Prevent running on initial render when requestParams is empty
    if (requestParams.url && requestParams.method) {
      // Async function to make API call
      const getApiData = async () => {
        const response = await fetch(requestParams.url, { method: requestParams.method });
        const data = await response.json();
        setApiResults(data);
      }
      getApiData();
    }
  }, [requestParams]);

  return (
    <div className="App">
      <Header />
      <Form handleFormSubmit={handleFormSubmit} />
      <Results data={apiResults} />
      <Footer />
    </div>
  );
}

export default App;
