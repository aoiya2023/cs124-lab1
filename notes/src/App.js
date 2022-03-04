import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';




function App(props) {
    const [tasks, setTasks] = useState(props.initialData)
    const [showComplete, setShowComplete] = useState(false)

    // Delete task
    function deleteTask () {
        setTasks(tasks.filter((task) => task.complete !== true))
    }

    // Add task
    function addTask (e) {
        const complete = false
        const hidden = false
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id,...e,complete}
        setTasks([...tasks, newTask])
    }

    // Hide Task
    function hideTask () {
        setTasks(tasks.map((task) => task.complete
            ? {...task, hidden: !task.hidden} : task))
        setShowComplete(!showComplete)
    }

    // Rename Task
    function renameTask (id, value) {
        setTasks(tasks.map (
            task => task.id === id ? {...task, text: value} : task))
   
    }

    // Completed Task
    function completedTask (id) {
        setTasks(tasks.map((task) => task.id === id
            ? {...task, complete: !task.complete} : task))
    }

    return (
    <div className='container'>
      <Header title='TO DO LIST'/>
      <AddTask text='Add' addTask={addTask}/>
      <Tasks tasks={tasks} className='lsItems'
      completedTask={completedTask}
      renameTask={renameTask}/>
      <Footer showComplete={showComplete} hideTask={hideTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;