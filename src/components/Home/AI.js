/* import React, { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [result, setResult] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (unit === 'celsius') {
      const fahrenheit = (temperature * 9.0 / 5.0) + 32;
      setResult(`${temperature}°C is equal to ${fahrenheit}°F.`);
    } else {
      const celsius = (temperature - 32) * 5.0 / 9.0;
      setResult(`${temperature}°F is equal to ${celsius}°C.`);
    }
  }

  return (
    <div>
      <h1>Temperature Converter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="temperature">Enter temperature:</label>
        <input
          type="number"
          id="temperature"
          name="temperature"
          value={temperature}
          onChange={(event) => setTemperature(event.target.value)}
          required
        />
        <select
          id="unit"
          name="unit"
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        <button type>Play</button>
      </form>

    </div>
  )
}
export default App;
 */