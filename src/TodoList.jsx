import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => { 
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4  dark:bg-gray-800">
          {todos.map((todo) => ( 
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          ))}
        </div>
    )
 }
 export default TodoList;