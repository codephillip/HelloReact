import { useState } from 'react'

const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "go shopping tmox",
            day: "Mar 9th at 3:40pm",
            reminder: true
        },
        {
            id: 2,
            text: "read book",
            day: "Mar 10th at 1:20pm",
            reminder: false
        },
        {
            id: 3,
            text: "write blog post",
            day: "Mar 10th at 5:20am",
            reminder: true
        }
    ]
)

const Tasks = () => {
    return (
        <>
        {
            tasks.map((task) => (
                // item has to be unique add key attribute
                <h3 key={task.id}>{task.id} - {task.text}</h3>
            ))
        }
        </>
    )
}

export default Tasks;