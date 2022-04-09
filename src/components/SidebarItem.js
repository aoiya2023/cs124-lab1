import './SidebarItem.css'
import ListDelButton from './ListDelButton'

export default function SidebarItem (props) {
	return (
		<div>
			<li className="menu-item">
				{/* <Link to={`/${props.list.text}`}></Link> */}
				<input type='text'
					onChange={(e) => props.renameList(props.list.id, e.target.value)}
					value={props.list.text} 
				/>
				<ListDelButton deleteList={props.deleteList} list={props.list}/>
				
			</li>
			
		</div>
	)
}