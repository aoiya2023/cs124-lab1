import './HideButton.css';

export function HideButton (props){
    return (
        <button onClick={props.hideTask}
                className='hideBtn'>
            {props.text}
        </button>
    )
}
