import { TodoList } from "../TodoList/TodoList"
import { AddTodo } from "../AddTodo/AddTodo"
import { useState } from "react"

export const Todo = () => {
    const [todos, setTodos] = useState([])

    const onAddTodo = (newTodoString) => {
        const newTodo =  {
            id: todos.length + 1,
            title: newTodoString, 
            isComplited: false
        }
        setTodos([...todos, newTodo])
    }

    const onToggleTodo = (id) => {

        // const copyTodos = [...todos];
        // for(let i = 0; i < copyTodos.length; i++ ) {
        //     const todoItem = copyTodos[i]
        //     if (todoItem.id === id) {
        //         todoItem.isComplited = !todoItem.isComplited
        //     }
        // }

        // const updatedTodos = todos.map((todo) => {
        //     if (todo.id === id) {
        //         return {
        //             ...todo,
        //             isComplited: !todo.isComplited
        //         }
        //     }
        //     return todo
        // })

        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isComplited: !todo.isComplited
                }
            }
            return todo
        }))
    }

    return(
        <div>
            <AddTodo onAddTodo={onAddTodo}/>
            <TodoList
            todos={todos} 
            onTodoClick={onToggleTodo}
            />
        </div>
    )
}