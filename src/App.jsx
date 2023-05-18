import React, { useReducer, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Results from './Components/Results';
import Footer from './Components/Footer';
import History from './Components/History'; // Import the new History component

const initialState = {
  requestParams: {},
  apiResults: null,
  history: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'SET_RESULTS':
      return { ...state, apiResults: action.payload, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (params) => {
    dispatch({ type: 'SET_PARAMS', payload: params });
  }

  useEffect(() => {
    if (state.requestParams.url && state.requestParams.method) {
      const getApiData = async () => {
        const response = await fetch(state.requestParams.url, { method: state.requestParams.method });
        const data = await response.json();
        dispatch({ type: 'SET_RESULTS', payload: { params: state.requestParams, results: data } });
      }
      getApiData();
    }
  }, [state.requestParams]);

  return (
    <div className="App">
      <Header />
      <Form handleFormSubmit={handleFormSubmit} />
      <History history={state.history} onRerun={handleFormSubmit} />
      <Results data={state.apiResults} />
      <Footer />
    </div>
  );
}

export default App;
