import './DelButton.css';

export default function DelButton(props) {
    return (
        <button onClick={props.deleteCompletedTasks} className='dltBtn'>
            {props.text}
        </button>
    )
}
