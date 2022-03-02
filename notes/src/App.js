import './index.css';
import {useState} from 'react'
import {Header} from './components/Header.js'
import {AddTask} from './components/AddTask.js'
import {Tasks} from './components/Tasks.js'
import {HideButton} from './components/HideButton.js'
import {DelButton} from './components/DelButton.js'

const initialData = [
    {
        id: 1,
        text: 'Call Mom',
        complete: false
    },
    {
        id: 2,
        text: 'Feed duck',
        complete: true
    },
    {
        id: 3,
        text: 'Buy flower',
        complete: false
    }
]

function App() {
    const [tasks, setTasks] = useState(initialData)
    const [showComplete, setShowComplete] = useState(false)

    // Delete task
    function deleteTask () {
        setTasks(tasks.filter((task) => task.complete !== true))
    }

    // Add task
    function addTask (e) {
        const complete = false
        const id = tasks.length + 1
        const newTask = {id,...e,complete}
        setTasks([...tasks, newTask])
    }

    // Hide Task
    function hideTask () {
        return console.log('hide')
    }

    // Rename Task

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
      completedTask={completedTask}/>
      <HideButton text='Hide' hideTask={hideTask}/>
      <DelButton text='Delete' deleteTask={deleteTask}/>
    </div>
  );
}

export default App;