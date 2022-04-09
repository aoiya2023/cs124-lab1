import './AddList.css';
import {useState} from 'react';

export default function AddList(props) {
    const [text, setText] = useState('')

    function onSubmit (e) {
        e.preventDefault()
        if(!text) {
            alert('Please add a list name.')
            return
        }
        props.addList(text)
        setText('')
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <input type='text'
                   placeholder='list name...'
                   className='input'
                   value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <input type='submit'
                   value='Add'
                   className='addBtn'/>
        </form>
    )
}
