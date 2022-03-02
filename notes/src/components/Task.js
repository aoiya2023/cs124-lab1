import './Task.css'

export function Task (props) {
    return (
        <div className={`lsItem ${props.task.complete ? 'complete' : ''}`}
             onClick={() => props.completedTask(props.task.id)}>
            <h3>{props.task.text}</h3>
        </div>
    )
}
