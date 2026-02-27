import React, { lazy, Suspense, useState } from 'react';

const User = lazy(() => import('./User'));

function App() {
  const [load, setLoad] = useState(false);

  return (
    <div className="container">
      <h1>Lazy Loading Demo</h1>

      <button onClick={() => setLoad(true)}>
        {load ? 'Reloading...' : 'Load User Component'}
      </button>

      {load && (
        <Suspense fallback={<h2 className="loading">Loading...</h2>}>
          <User />
        </Suspense>
      )}
    </div>
  );
}

export default App;
