import './DelButton.css';

export default function DelButton(props) {
    return (
        <button onClick={props.deleteTask}
                className='dltBtn'>
            {props.text}
        </button>
    )
}
