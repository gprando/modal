import React from 'react';

import { Container } from './styles';

function Modal({ id = 'modal', onClose = () => { }, children }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <Container id='modal' onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}></button>
        <div className="content">
          {children}
        </div>
      </div>
    </Container>
  );
}

export default Modal;