import './SidebarItem.css'

export default function SidebarItem (props) {
	return (
		<a className="menu-item" href="/">
			<input type='text'
				onChange={(e) => props.renameList(props.list.id, e.target.value)}
        		value={props.list.text} 
			/>
			
		</a>
	)
}