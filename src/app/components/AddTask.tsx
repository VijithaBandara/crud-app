import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from "./Modal";
import {useState} from "react";

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (<div>
        <button onClick={() => setModalOpen(true)}className="btn btn-primary w-full">
        Add new task
        <AiOutlinePlus className='ml-2' size={18}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form>
                <h3 className="font-bo;d text-lg">Add new task</h3>
                <div className="modal-action">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </Modal>
    </div>
    );
};

export default AddTask;