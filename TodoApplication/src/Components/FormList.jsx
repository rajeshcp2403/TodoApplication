import styles from './Form.module.css'
import { useState } from "react";
export default function FormList({todos,setTodos}){
    const [todo,setTodo] = useState({name:"",done:false});
    function HandleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"",done:false});
    }
    return <>
          <form className={styles.todoform} onSubmit={HandleSubmit}>
            <div className={styles.div}>
            <input className={styles.todoinput}  onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name} placeholder='enter anything' type="text" />
            <button className={styles.todoButton} type="submit">Add</button>
            </div>
        </form>
      
    </>
}