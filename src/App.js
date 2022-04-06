import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';


import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, query, serverTimestamp, setDoc, orderBy, updateDoc } from "firebase/firestore";

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
    const [showComplete, setShowComplete] = useState(false);
    const [sortBy, setSortBy] = useState("created");
    // const [hidden, setHidden] = useState(false);
    const q = query(collection(db, collectionName), orderBy(sortBy));
    const [tasks, loading, error] = useCollectionData(q);

    // Add task
    function addTask (taskName) {
        const uniqueId = generateUniqueID();
        setDoc(doc(db, collectionName, uniqueId),
            {
                id: uniqueId,
                text: taskName,
                complete: false,
                priorityLevel: 1,
                //hidden: false,
                created: serverTimestamp(),
            });
    }

    // Delete task
    function deleteCompletedTasks () {
        tasks.forEach(task => task.complete && deleteDoc(doc(db, collectionName, task.id)));
        // && !task.hidden
    }

    // Hide Task
    function hideTask () {
        setShowComplete(!showComplete)
    }

    // Rename Task
    function renameTask (id, value) {
        updateDoc(doc(db, collectionName, id), {text: value});
    }

    // Complete Task
    function completedTask (id, value) {
        setDoc(doc(db, collectionName, id), {complete: !value}, {merge: true});
    }

    // Prioritize Task
    function changePriority (id, value) {
        let priority = value
        if (value === 1) {   /* 1 is most urgent, 3 is least urgent*/ 
            priority = 2
        } else if (value === 2) {
            priority = 3
        } else {
            priority = 1
        }
        setDoc(doc(db, collectionName, id), {priorityLevel : priority}, {merge: true});
    }

    // Sort Task
    function sortedTask() {
        if (sortBy === "text") {
            setSortBy("priorityLevel")
        } else if (sortBy === "priorityLevel") {
            setSortBy("created")
        } else {
            setSortBy("text")
        }
    }

    // Loading Screen
    if (loading) {
        return "loading..";
    }

    // Error Screen
    if (error) {
        return "Error Occured";
    }

    let filteredList = tasks
    if (showComplete) {
        filteredList = tasks.filter(task => !task.complete);
    }

    return (
    <div className='container'>
      <Header title='TO DO LIST'/>
      <AddTask text='Add' addTask={addTask}/>
      <Tasks tasks={filteredList} className='lsItems'
        completedTask={completedTask}
        renameTask={renameTask}
        changePriority={changePriority}/>
      <Footer showComplete={showComplete} 
      sortBy={sortBy} 
      hideTask={hideTask} 
      deleteCompletedTasks={deleteCompletedTasks}
      sortedTask={sortedTask}/>
    </div>
  );
}

export default App;