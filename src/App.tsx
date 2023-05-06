import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Joao"
        email="joao@gmail.com"
        age={18}
        isMarried={false}
        friends={["paulo", "gabriel", "lucas"]}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
