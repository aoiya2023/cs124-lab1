//import React from 'react';
import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu';
import SidebarItem from './SidebarItem'

export default function Sidebar(props) {
  return (
    <Menu>
      <button/>  
      {props.lists.map((list) => (
                <SidebarItem
                    key={list.id}
                    list={list}
                    renameList={props.renameList}/>
            ))}
    </Menu>
  )
};

