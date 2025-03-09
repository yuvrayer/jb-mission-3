import { NavLink } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className='NotFound'>
            Hello Hello there!
            there isn`t a routing for this url.
            try: http://localhost:5173/addMeeting instead!
            <br /><br />
            <NavLink to="/meetings">meetings</NavLink>

        </div>
    )
}