import React from "react";
import {ToDoCounter} from "../ToDoCounter";
import {ToDoSearch} from "../ToDoSearch";
import {ToDoList} from "../ToDoList";
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { Spinner } from "../Spinner";
import { Blind } from "../NoFound";
 
function AppUI() {
const { error , 
        loading , 
        searchedToDo ,
        toCompleteToDo , 
        toDeleteToDo , 
        openModal , 
        setOpenModal } = React.useContext(ToDoContext);

    return(
<section className='section'>
    <ToDoCounter/>
    <ToDoSearch/>
    <ToDoList>
        {error && <p>Se ha producido un Error...</p>}
        {loading && <Spinner/>}
        {(!loading && !searchedToDo.length) && <Blind/>}

        {searchedToDo.map( todo =>(
        <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => toCompleteToDo(todo.text) }
          onDelete={() => toDeleteToDo(todo.text) }
        />
        ))}
    </ToDoList>

    {!!openModal && (
        <Modal>
            <ToDoForm/>
        </Modal>
    )}

    <CreateToDoButton setOpenModal={setOpenModal}/>
</section>
    )
};

export {AppUI};