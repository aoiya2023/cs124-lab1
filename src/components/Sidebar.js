//import React from 'react';
import './Sidebar.css';
import {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import SidebarItem from './SidebarItem';
import Popup from './Popup';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import AddList from './AddList';


export default function Sidebar(props) {
  const [showPopup, setShowPopup] = useState(false);

  function toggleModal() {
    setShowPopup(!showPopup);
  }

  // classList.replace('bm-cross-button', 'bm-no-button')
  // document.getElementsByClassName("bm-cross-button").className.replace('bm-cross-button', 'bm-no-button')
  //.replace("bm-cross-button", "bm-no-button")
  
  return (
    <Menu>
      {/* {
        showPopup ? document.getElementsByClassName("bm-cross-button")[0].className.replace("bm-cross-button", "bm-no-button")
         : console.log()
      } */}
      <div className='List'>
        <div className='add-list'>
          <h2 className='add-list-text'>LISTS</h2>
          <IconButton className='add-list-button' onClick={toggleModal}><AddTaskIcon style={{ fill: '#0072ea' }}/></IconButton>
        </div>
        {props.lists?.map((list) => (
                <SidebarItem
                    key={list.id}
                    list={list}
                    renameList={props.renameList}
                    deleteList={props.deleteList}
                    changeListId={props.changeListId}/>
            ))}
      </div>
      
      {showPopup && <Popup onClose={toggleModal} onAdd={props.addList}>
        <div>
          <AddList addList={props.addList}/>
        </div>
      </Popup>}
      
    </Menu>
  )
};

