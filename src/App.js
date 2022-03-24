import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, query, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJOGQftqdeOAdZZK5rf9tDX6kNIqSHK7Y",
    authDomain: "cs124-lab3-4fb9a.firebaseapp.com",
    projectId: "cs124-lab3-4fb9a",
    storageBucket: "cs124-lab3-4fb9a.appspot.com",
    messagingSenderId: "589751471381",
    appId: "1:589751471381:web:98f3927ee0b5a7b2ff2d1c"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const collectionName = "Tasks-Collection"

function App() {

    const q = query(collection(db, collectionName));
    const [tasks, loading, error] = useCollectionData(q);
    //const [showComplete, setShowComplete] = useState(false);

    // Add task
    function addTask (taskName) {
        const uniqueId = generateUniqueID();
        setDoc(doc(db, collectionName, uniqueId),
            {
                id: uniqueId,
                text: taskName,
                complete: false,
                hidden: false,
            });

    }

    // Delete task
    function deleteTask () {
        // setTasks(tasks.filter((task) => !task.complete))
        tasks.forEach(task => task.complete && deleteDoc(doc(db, collectionName, task.id)));
    }

    // Hide Task
    function hideTask () {
    //     setTasks(tasks.map((task) => task.complete
    //         ? {...task, hidden: !task.hidden} : task))
    //     setShowComplete(!showComplete)
    }

    // Rename Task
    function renameTask (id, value) {
        setDoc(doc(db, collectionName, id), {text: value}, {merge: true})
    }

    // Complete Task
    function completedTask (id) {
        // setTasks(tasks.map((task) => task.id === id  ? {...task, complete: !task.complete} : task))

    }

    if (loading) {
        return "loading..";
    }

    return (
    <div className='container'>
      <Header title='TO DO LIST'/>
      <AddTask text='Add' addTask={addTask}/>
      <Tasks tasks={tasks} className='lsItems'
      completedTask={completedTask}
      renameTask={renameTask}/>
      <Footer  hideTask={hideTask} deleteTask={deleteTask}/>
    </div>
  );
  //showComplete={showComplete}
}

export default App;