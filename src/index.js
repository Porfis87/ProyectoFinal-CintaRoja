import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './firebase-config';

import{ FirebaseAppProvider } from 'reactfire'

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <React.StrictMode>
    <Suspense fallback={'Conectando con Sofi Clothes...'}>
    <App />
    </Suspense>
  </React.StrictMode>
  </FirebaseAppProvider>
  ),document.getElementById('root')
);