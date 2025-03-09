import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {

    return (
        <div className='Header'>
            <nav>
                <NavLink to="/meetings">meetings</NavLink>
                <NavLink to="/developing">developing teams</NavLink>
                <NavLink to="/addMeeting">add new meeting</NavLink>
            </nav>
        </div>
    )
}