import { useState } from "react"
import FormList from "./FormList";
import AcessItem from "./AcessItem";

export default function Todo(){
      const [todos,setTodos] = useState([]);
    return <>
      <FormList todos={todos} setTodos={setTodos}/>
      <AcessItem todos={todos} setTodos={setTodos} />
    </>
}