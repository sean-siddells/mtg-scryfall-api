import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => (
  <div className="app">
    <Outlet />
  </div>
);

export default App;
