import React from 'react';

interface ModalProps{
    modalOpen: boolean;
    setModalOpen:(open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal:React.FC<ModalProps> = ({modalOpen, setModalOpen,children}) => {
  return (<div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
  <button className="btn" onClick={()=> setModalOpen(false)}>open modal</button>
  <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    {children}
    </div>
  </dialog>
  </div>);
};

export default Modal;
