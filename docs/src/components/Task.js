import './Task.css'
import { useDoubleTap } from 'use-double-tap';

export default function Task (props) {
    const onDoubleTap = useDoubleTap((event) => {
        props.completedTask(props.task.id)
    })
    return (
        <li className={`${props.task.hidden ? 'hidden' : ''}`}>
        <input type='text'
            className={`lsItem ${props.task.complete ? 'complete' : ''} ` }
            onChange={(e) => props.renameTask(props.task.id, e.target.value)}
            {...onDoubleTap}
            value={props.task.text}
            
        />
        </li>
    )
}