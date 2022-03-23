import './Tasks.css';
import Task from './Task'

export default function Tasks (props){
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