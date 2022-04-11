import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskSupplier from './components/TaskSupplier';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, query, serverTimestamp, setDoc, updateDoc, getDoc } from "firebase/firestore";

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

const collectionName = "List-Collection";
const subCollectionName = "Tasks-Collection";

function App() {
    const qList = query(collection(db, collectionName));
    const [lists, loading, error] = useCollectionData(qList);
    const [currentListId, setCurrentListId] = useState((lists && lists.length!==0) ? lists[0].id : 'none')

    function addList(listName) {
        const uniqueId = generateUniqueID();
        setDoc(doc(db, collectionName, uniqueId),
            {
                id: uniqueId,
                text: listName,
                created: serverTimestamp(),
            });
        
    }
    
    // Change current list Id
    function changeListId (id) {
        setCurrentListId(id);
    }

    // Rename List
    function renameList(id, value) {
       updateDoc(doc(db, collectionName, id), {text: value});
    }

	// Delete List 
    function deleteList(id) {
        
        // TODO: delete Tasks
        //let collectionRef = collection(db, collectionName, id, subCollectionName)
        // let tasks = getDoc(db, collectionName, id)
        // tasks.forEach(task => console.log(task.id))
        //deleteDoc(doc(db, collectionName, id, subCollectionName, task.id))
        // if(lists.list.id === id)
        // {
        let whatever = lists.filter(list => list.id === list)
        console.log(whatever[0].id)
        // }
        
        deleteDoc(doc(db,collectionName,id))
        if (lists.length===0) {
            setCurrentListId('none');
        }
        
    }

    // Loading Screen
    if (loading) {
        return "loading..";
    }

    // Error Screen
    if (error) {
        return (
			<p>Error: {JSON.stringify(error)}</p>
		)
    }
    
    return (
    <div id='container'>
      <Header title='TO DO LIST'/>
      <Sidebar outerContainerId={'container'}
            lists={lists}
            addList={addList}
            renameList={renameList}
            deleteList={deleteList}
            changeListId={changeListId} 
        />
        <TaskSupplier db={db} currentListId={currentListId}/>
              
    </div>
  );
}

export default App;