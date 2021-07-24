import React, { useState } from 'react';
// @ts-ignore
import Calendar from 'react-calendar';

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default App