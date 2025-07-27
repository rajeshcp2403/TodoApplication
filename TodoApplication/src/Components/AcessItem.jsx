import TodoItem from "./TodoItem";
import Styles from "./todolist.module.css";
export default function AcessItem({todos,setTodos}){
    return <>
        <div className={Styles.list}>
       {todos.map(item =>
            <TodoItem key={item.name} item = {item} todos={todos} setTodos={setTodos}/>
       )}
       </div>
    </>
}