import { useState } from "react"
import FormList from "./FormList";
import AcessItem from "./AcessItem";
import Footer from "./Footer";

export default function Todo(){
      const [todos,setTodos] = useState([]);
      const CompletedTodos = todos.filter((todo) => todo.done).length;
      const Total = todos.length;
    return <>
      <FormList todos={todos} setTodos={setTodos}/>
      <AcessItem todos={todos} setTodos={setTodos} />
      <Footer CompletedTodos={CompletedTodos} Total={Total}/>
    </>
}