import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import { getCompanies } from './api/client';

function App() {
  const [results, setResults] = useState<any>(undefined)

  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault()
    const results = await getCompanies()
    console.log(results)
    if (results) {
      setResults(results)
    }
  }, [setResults])

  return (
    <div className="App">

      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Voer een bedrijfsnaam in" />
          <button type="submit">Zoeken</button>
        </form>
      </div>
      <div className="results">
        {results ? results.map((result: any, index: number) => (
          <pre key={index}>{JSON.stringify(result)}</pre>
        )) : "Helaaa niets gevonden. Probeer een andere zoekterm."}
      </div>
    </div>
  );
}

export default App;
