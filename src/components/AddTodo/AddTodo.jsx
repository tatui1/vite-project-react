import { useState } from "react"

export const AddTodo = (props) => {
    const [todoValue, setTodoValue] = useState('')
    

    const submitTodo = () => {
        props.onAddTodo(todoValue)
        setTodoValue('')
    }
    return(
        <div>
            <input 
                placeholder="write your todo"
                value={todoValue}
                type="text" 
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={submitTodo}>Add Todo</button>
        </div>
    )
}