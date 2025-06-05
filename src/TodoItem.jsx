import CrossIcon from "./componets/Icons/IconCross";
import IconCheck from "./componets/Icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => { 
    const {id, title, completed} = todo;

    return (
        <article {...props}ref={ref} className="flex gap-4 border-b border-b-gray-400 ">
            <button 
            className={`h-5 w-5 flex-none rounded-full border-2 ${
                completed 
                    ? "grid place-items-center bg-gradient-to-r from-indigo-50 via-purple-500 to-pink-500"
                    : "inline-block"

            }` }
            onClick={() => updateTodo(id)}        
            >
                {completed && <IconCheck />}
            </button>
            <p className={`grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon/>
            </button>
        </article>        
    )
 })
 export default TodoItem;