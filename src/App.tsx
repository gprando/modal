import React, { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} >Open</button>
      <Modal 
        open={isOpen}
        setOpen={setIsOpen}
      >
        <h1>MOODAAL</h1>
        
      </Modal>
    </div>
  );
}

export default App;
