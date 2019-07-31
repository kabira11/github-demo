import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import SearchFilter from './components/SearchAccounts';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <SearchFilter/>
    </div>
  );
}

export default App;