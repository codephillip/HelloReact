import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

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
    return (
        <div className="container">
            <Header title="page1"/>
            <h1>hello react app</h1>
            <Tasks tasks={tasks}/>
        </div>
    );
}


export default App;
