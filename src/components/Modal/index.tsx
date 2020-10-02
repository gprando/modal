import React from 'react';
import { BodyModal } from './styles';
import { AiOutlineClose } from "react-icons/ai";
interface modalProps {
  open: boolean;
  setOpen(open: boolean): void;
}
const Modal: React.FC<modalProps> = ({ open, setOpen, children }) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal") setOpen(false);
  }
  
  return open ? (
    <BodyModal
    id="modal"
    onClick={handleOutsideClick}
    >
    <div className="janela">
    <AiOutlineClose
    onClick={() => setOpen(false)}
    />
    {children}
    </div>
    </BodyModal>
    
  ):null

}

export default Modal;
