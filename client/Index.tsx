// import { initializeApp } from 'firebase/app'
// import { getFirebaseConfig } from './src/firebase-config'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './components/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />,
  ),
);

const rootNode = document.getElementById('app');

if (rootNode) {
  ReactDOM.createRoot(rootNode)
    .render(<RouterProvider router={router} />);
}

// const firebaseAppConfig = getFirebaseConfig()
// initializeApp(firebaseAppConfig)
