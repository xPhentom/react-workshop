import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/dashboard';

const App: React.FC = () => {

  // App gets loaded as first component. But I want it to be a component called Dashboard.
  // In different applications, this would be done differently, but yeah...
  return (
    <div><Dashboard/></div>
  );
}

export default App;
