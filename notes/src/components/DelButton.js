import './DelButton.css';

export function DelButton (props){
    return (
        <button onClick={props.deleteTask}
                className='dltBtn'>
            {props.text}
        </button>
    )
}
