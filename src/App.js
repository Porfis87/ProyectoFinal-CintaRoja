import React from 'react';
import {useFirebaseApp, useUser} from 'reactfire';
import Auth from './Auth';


function App() {
  const user = useUser();
  return (
    <div>
      { user && <p>Usuario: {user.email} </p>}
      <Auth />
    </div>
  );
}

export default App;