import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskSupplier from './components/TaskSupplier';

import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

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

function App() {
    const [thisListId, setThisListId] = useState("SJLdlfJSdfjls") // what state to use?
    
    const qList = query(collection(db, collectionName));
    const [lists, loading, error] = useCollectionData(qList);

    function addList(listName) {
        const uniqueId = generateUniqueID();
        setDoc(doc(db, collectionName, uniqueId),
            {
                id: uniqueId,
                text: listName,
                created: serverTimestamp(),
            });
        
    }
    
    // Set List Id
    function setListId (id) {
        setThisListId(id);
    }

    // Rename List
    function renameList(id, value) {
       updateDoc(doc(db, collectionName, id), {text: value});
    }

	// Delete List 
    function deleteList() {
        // lists.forEach(list => list.id===id && deleteDoc(doc(db, collectionName, id)));
        console.log("click");
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
        />
        <TaskSupplier db={db} thisListId={thisListId}/>
              
    </div>
  );
}

export default App;