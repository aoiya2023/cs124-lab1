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
    const [tasks, loading] = useCollectionData(q);
    const [showComplete, setShowComplete] = useState(false);

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
    function deleteCompletedTask () {
        tasks.forEach(task => task.complete && !task.hidden && deleteDoc(doc(db, collectionName, task.id)));
    }

    // Hide Task
    function hideTask () {
        setShowComplete(!showComplete)
        tasks.forEach(task => task.complete && setDoc(doc(db, collectionName, task.id), {hidden: !task.hidden}, {merge: true}));
    }

    // Rename Task
    function renamedTask (id, value) {
        setDoc(doc(db, collectionName, id), {text: value}, {merge: true});
    }

    // Complete Task
    function completedTask (id, value) {
        setDoc(doc(db, collectionName, id), {complete: !value}, {merge: true});
    }

    // Prioritize Task
    function prioritizedTask () {

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
      renamedTask={renamedTask}/>
      <Footer showComplete={showComplete} hideTask={hideTask} deleteCompletedTask={deleteCompletedTask}/>
    </div>
  );
}

export default App;