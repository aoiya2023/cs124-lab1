import './Popup.css';

function Popup(props) {
    return <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <button className={"alert-close"} type={"button"}
                    onClick={props.onClose}>
                Close
            </button>
        </div>
    </div>
}

export default Popup;