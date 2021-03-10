import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
    return (
        <>
            {
                tasks.map((task) => (
                    // item has to be unique add key attribute
                    // <h3 key={task.id}>{task.id} - {task.text}</h3>
                    <Task key={task.id} task={task} onDelete={onDelete}/>
                ))
            }
        </>
    )
}

export default Tasks;