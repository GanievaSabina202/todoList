import style from './Todolist.module.css'
import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, check } from '../store/todoSlice';
import { ListGroup } from 'react-bootstrap'

const Todolist = () => {
    const todoRef = useRef()
    const dispactch = useDispatch()
    const todoSelector = useSelector((state) => state.todo.todo)
    const itemSelectors = useSelector((state) => state.todo.active)
    console.log(itemSelectors);

    const Add = () => {
        let todoValue = todoRef.current.value
        dispactch(addTodo(todoValue))
    }

    const item = () => {
        dispactch(check())
    }

    return (
        <div className={style.Containerr}>
            <span className={style.span}>
                <input ref={todoRef} className={style.gate} id={style.class} type="text" placeholder="todo!" /><label htmlFor="class">Task</label>
            </span>
            <button onClick={Add}>Add</button>

            <ListGroup as="ol" numbered className={style.listWrapper}>
                {todoSelector.map((i, index) => (
                    <ListGroup.Item as="li" className={style.listItem} onClick={item} key={index}>{index} {i}
                        {itemSelectors ? <span className={style.false}>✓</span> : <span className={style.true}>✗</span>}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Todolist;