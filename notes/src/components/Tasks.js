import './Tasks.css';
import {Task} from './Task.js'

export function Tasks (props){
    return (
        <ul className='lsItems'>
            {props.tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    completedTask={props.completedTask}
                    renameTask={props.renameTask}/>
            ))}
        </ul>
    )
}