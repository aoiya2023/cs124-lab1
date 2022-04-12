//import React from 'react';
import './Sidebar.css';
import {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import SidebarItem from './SidebarItem';
import AddListPopup from './AddListPopup';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import AddList from './AddList';


export default function Sidebar(props) {
  const [showAddListPopup, setShowAddListPopup] = useState(false);

  function toggleModal() {
    setShowAddListPopup(!showAddListPopup);
  }
  
  return (
    <Menu>

      <div className='List'>
        <div className='add-list'>
          <h2 className='add-list-text'>LISTS</h2>
          <IconButton className='add-list-button' onClick={toggleModal}><AddTaskIcon style={{ fill: '#0072ea' }}/></IconButton>
        </div>
        <ul className='listItems'>
          {props.lists?.map((list) => (
                  <SidebarItem
                      key={list.id}
                      list={list}
                      lists={props.lists}
                      renameList={props.renameList}
                      changeListId={props.changeListId}
                      db={props.db}/>
              ))}
          </ul>
      </div>
      
      {showAddListPopup && <AddListPopup onClose={toggleModal} onAdd={props.addList}>
        <div>
          <AddList addList={props.addList}/>
        </div>
      </AddListPopup>}
      
    </Menu>
  )
};

