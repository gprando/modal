import React, { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} >Open</button>
      {isOpen ? <Modal onClose={() => setIsOpen(false)}>Modal</Modal> : null}
    </div>
  );
}

export default App;
