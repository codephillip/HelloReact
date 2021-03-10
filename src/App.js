import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from "./components/AddTask";

// class based component
// class App extends React.Component {
//   render() {
//     return (
//       <h1>helloworld class</h1>
//     );
//   }
// }

// function based component
// function App() {
const App = () => {
    const [showAddForm, setShowAddForm] = useState(false)
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
        // updating tasks
        // setTasks([...tasks, {id: 4, text: "buy shoes", day: "Mar 20th at 3:09pm", reminder: true}])

    )

    const addNewTask = (task) => {
        // console.log('add', task)
        const id = Math.round(Math.random() * 1000)
        // task['id'] = id
        // spread out previous task and add id field
        var newTask = {id, ...task}
        console.log('new task', newTask)
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log('toggle', id)
        setTasks(tasks.map(
            (task) => task.id === id
                ? {...task, reminder: !task.reminder}
                : task))
    }

    const triggerAddForm = () => {
        setShowAddForm(!showAddForm)
        console.log('showaddform', showAddForm)
    }

    return (
        <div className="container">
            <Header title="page1" triggerAddForm={triggerAddForm} showAdd={showAddForm}/>
            {
                // && short way of using IF only
                showAddForm && <AddTask onAdd={addNewTask}/>
            }
            <h1>hello react app</h1>
            {
                tasks.length > 0
                    ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
                    : 'No tasks available'
            }
        </div>
    );
}


export default App;
