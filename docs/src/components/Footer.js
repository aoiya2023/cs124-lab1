import DelButton from './DelButton'
import HideButton from './HideButton'

export default function Footer(props) {
    return (
        <footer className='footer'>
            <HideButton text={props.showComplete ? "Unhide" : "Hide"} hideTask={props.hideTask}/>
            <DelButton text='Delete' deleteTask={props.deleteTask}/>
        </footer>
    )
}