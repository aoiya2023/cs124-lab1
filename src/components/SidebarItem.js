import './SidebarItem.css'
import ListDelButton from './ListDelButton'

export default function SidebarItem (props) {
	return (
		<div>
			<li className="menu-item">
				<input type="radio" id="radio-button" name="sidebar-item"
					onClick={(e) => props.changeListId(props.list.id)}/>
				<input type='text'
					onChange={(e) => props.renameList(props.list.id, e.target.value)}
					value={props.list.text} 
				/>
				<ListDelButton deleteList={props.deleteList} list={props.list}/>
			</li>
			
			
		</div>
	)
}