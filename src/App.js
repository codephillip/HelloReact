import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
  return (
    <div className="container">
      <Header title="page1"/>
      <h1>hello react app</h1>
      <Tasks/>
    </div>
  );
}




export default App;
