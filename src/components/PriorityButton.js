import "./PriorityButton.css";

export default function PriorityButton(props) {
    return (
        <button onClick={props.prioritizedTask} className='priBtn'>
            {props.text}
        </button>
    )
}