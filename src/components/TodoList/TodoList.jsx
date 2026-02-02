import { TodoItem } from "../TodoItem/TodoItem"
import { ToggleTodo } from "../ToggleTodo/ToggleTodo"


export const TodoList = ({todos, onTodoClick}) => {
    return(
        <div>
            {todos.map(todo => (
                <div key={todo.id} >
                    <TodoItem 
                        title={todo.title} 
                        isComplited={todo.isComplited}
                    />
                    <ToggleTodo 
                        isComplited={todo.isComplited}
                        onTodoClick={()=>onTodoClick(todo.id)}
                    />
                </div>
            ))}
        </div>
    )
}