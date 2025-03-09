import "./Meeting.css"
import { useEffect, useState } from 'react'
import MeetingModel from '../../../../models/meeting/Meeting'
import meetingService from '../../../../services/Meeting'
import { useNavigate } from 'react-router-dom'
import developingModel from "../../../../models/developing/Developing"
import developingService from '../../../../services/developing'


export default function Meeting() {
    const [meetings, setMeetings] = useState<MeetingModel[]>([])
    const [developings, setDevelopings] = useState<developingModel[]>([])

    useEffect(() => {
        developingService.getAllDevelopings()
            .then(setDevelopings)
            .catch(alert)
        meetingService.getAllMeetings()
            .then(setMeetings)
            .catch(alert)
    }, [])


    const navigate = useNavigate()

    function addMeeting() {
        navigate(`/addMeeting`)
    }


    async function change(event: React.ChangeEvent<HTMLSelectElement>): Promise<void> {
        const { value } = event.target
        const filterdMeetings = await meetingService.getMeetings(value)
        setMeetings(filterdMeetings)
    }

    return (
        <>
            <div className="center-container">
                <span>all the meetings:</span>
                <button onClick={addMeeting} className='add-meeting-btn'>add meeting</button>
            </div>
            <div className="select">
                <span className="select-label">please select a developing team:</span>
                <br />
                <select onChange={change}>
                    <option disabled selected>please select option...</option>
                    {developings.map(d =>
                        <option value={d.id}>{d.name}</option>
                    )}
                </select>
            </div> <br />
            <div className='Meetings'>
                {meetings.map(m =>
                    <div className='Meeting' key={m.id}>
                        <h1>meetingRoom: {m.meetingRoom}</h1>
                        <h2>Developing: {m.developing.name}</h2>
                        <h3>startTime: {new Date(m.startTime).toLocaleTimeString()}</h3>
                        <h3>startTime: {new Date(m.startTime).toLocaleTimeString()}</h3>
                        <h4>description: {m.description}</h4>
                    </div>
                )}
            </div>
        </>
    )
}