import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './components/Context';
import { unregister } from './serviceWorker';
// import ScrollAnimation from './components/scrollAnimation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    {/* <ScrollAnimation> */}
    <React.StrictMode>
    <App />
  </React.StrictMode>
    {/* </ScrollAnimation> */}
  </ContextProvider>
);

// Unregister the service worker (disables offline support)
unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
