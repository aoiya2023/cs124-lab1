import './Header.css';

export function Header (props) {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
        </header>
    )
}