import './Popup.css';

function Popup(props) {
    return <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <div className="alert-buttons">
                <button className={"alert-button alert-cancel"} type={"button"}
                        onClick={props.onClose}>
                    Cancel
                </button>
                <button className={"alert-button alert-ok"} type={"button"}
                        onClick={() => {
                            props.onClose();
                            props.onAdd();
                        }}>
                    Add
                </button>
            </div>
        </div>
    </div>
}

export default Popup;