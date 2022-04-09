//import React from 'react';
import './Sidebar.css';
import {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import SidebarItem from './SidebarItem';
import Popup from './Popup';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import AddList from './AddList';


export default function Sidebar(props) {
  const [showPopup, setShowPopup] = useState(false);

  function handleAddList() {
    console.log('list gets added');
  }

  function toggleModal() {
    setShowPopup(!showPopup);
  }

  return (
    <Menu>
      <div className='List'>
        <IconButton onClick={toggleModal}><AddIcon/></IconButton>
        {/* {props.lists.map((list) => (
                <SidebarItem
                    key={list.id}
                    list={list}
                    renameList={props.renameList}/>
            ))} */}
      </div>
      
      {showPopup && <Popup onClose={toggleModal} onAdd={handleAddList}>
        <div>
          <AddList/>
        </div>
      </Popup>}
      
    </Menu>
  )
};

