import './TaskDelButton.css';

export default function TaskDelButton(props) {
    return (
        <button onClick={props.deleteCompletedTasks} className='dltBtn'>
            {props.text}
        </button>
    )
}
