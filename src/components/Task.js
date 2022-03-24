import './Task.css'
import { useDoubleTap } from 'use-double-tap';
import Priority from './components/PriodityButton'

export default function Task (props) {
    const onDoubleTap = useDoubleTap((event) => {
        props.completedTask(props.task.id, props.task.complete)
    })
    return (
        <li className={`${props.task.hidden ? 'hidden' : ''}`}>
        <input type='text'
            className={`lsItem ${props.task.complete ? 'complete' : ''} ` }
            onChange={(e) => props.renamedTask(props.task.id, e.target.value)}
            {...onDoubleTap}
            value={props.task.text}
        />
        <></>
        </li>
    )
}