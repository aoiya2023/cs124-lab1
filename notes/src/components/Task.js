import './Task.css'

export function Task (props) {
    return (
        <li className={`${props.task.hidden ? 'hidden' : ''}`}>
        <input className={`lsItem ${props.task.complete ? 'complete' : ''} ` }
            onDoubleClick={() => props.completedTask(props.task.id)}
            onChange={(e) => props.renameTask(props.task.id, e.target.value)}
            value={props.task.text}
            
        />
        </li>
    )
}