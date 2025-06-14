const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return(
        <section className="flex justify-between rounded-b-md bg-white p-4 dark:bg-gray-800" > 
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
          </section>
    )
 }
 export default TodoComputed;