"use client";
import React, { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import {FiEdit,FiTrash2} from 'react-icons/fi';
import Modal from "./Modal";
import { useRouter } from "next/router";
import { deleteTodo, editTodo } from "../../../api";

interface TaskProps {
        task: ITask
    }

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<String>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit,
        });
        setOpenModalEdit(false);
        router.refresh();
    };

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDeleted(false);
        router.refresh();
    }

    return (<tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex-gap-5">
            <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={25}/>
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
                <h3 className="font-bo;d text-lg">Edit task</h3>
                <div className="modal-action">
                <input 
                value = {taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Modal>
            <FiTrash2 onClick={() => setOpenModalDeleted} cursor="pointer" className='text-red-500' size={25}/>
            <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                <h3 className="text-lg">Are you sure, you want to delete this Task?</h3>
                <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn"
                >Yes</button>
            </Modal>
        </td>
      </tr>)
};

export default Task;