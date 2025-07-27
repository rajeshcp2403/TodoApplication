import Styles from "./todoItem.module.css";
export default function TodoItem({item,todos,setTodos}){
    function HandleDelete(item){
        console.log("item deleted",item);
        setTodos(todos.filter((todo)=>todo!==item));
       
    }
    function HandleClick(name){
        const array = todos.map((todo)=>todo.name === name?{...todo,done:!todo.done}:todo);
        setTodos(array);
    }
    const Name =item.done?Styles.list:""

    return <div className={Styles.item}>
        <div className={Styles.itemNum}>
            <span className={Name} onClick={()=>HandleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => HandleDelete(item)} className={Styles.DeleteButton}>x</button>
                </span>
                <hr/>
            </div>
        </div>
}