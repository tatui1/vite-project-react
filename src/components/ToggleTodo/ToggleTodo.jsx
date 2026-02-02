export const ToggleTodo = ({isComplited, onTodoClick}) => {
    return(
        <button onClick={onTodoClick}>
            {!isComplited ? '✅' : '❌'}
        </button>
    )
}