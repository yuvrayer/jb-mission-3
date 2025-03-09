import "./NewMeeting.css"
import { useNavigate } from "react-router-dom"
import meeting from "../../../../services/Meeting"
import MeetingDraft from "../../../../models/meeting/MeetingDraft"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import developingModel from "../../../../models/developing/Developing"
import developingService from "../../../../services/developing"

export default function NewMeeting() {
    const { register, handleSubmit, formState } = useForm<MeetingDraft>()

    const navigate = useNavigate()
    function cancel() {
        navigate(`/meetings`)
    }
    async function submit(draft: MeetingDraft) {
        await meeting.createMeeting(draft)
        navigate(`/meetings`)
    }

    const [developings, setDevelopings] = useState<developingModel[]>([])

    useEffect(() => {
        developingService.getAllDevelopings()
            .then(setDevelopings)
            .catch(alert)
    }, [])

    return (
        <>
            <div className="center-container">
                <span>add new meeting:</span>
            </div>
            <div className='NewMeeting'>
                <form onSubmit={handleSubmit(submit)}>
                    <label>name: </label>
                    <input placeholder="meetingRoom" {...register('meetingRoom', {
                        required: {
                            value: true,
                            message: 'you must provide a meeting room'
                        }
                    })} />
                    <span className='error'>{formState.errors.meetingRoom?.message}</span><br /><br />

                    <label>Developing Team: </label>
                    <select {...register('developingId', {
                        required: {
                            value: true,
                            message: 'you must select a developing Team'
                        }
                    })}>
                        <option value="" disabled selected>Choose a Developing</option>
                        {developings.map(d =>
                            <option value={d.id}>{d.name}</option>
                        )}
                    </select>< br /> <br />
                    <span className='error'>{formState.errors.developingId?.message}</span><br /><br />

                    <label>description: </label>
                    <input placeholder="description" {...register('description', {
                        required: {
                            value: true,
                            message: 'you must provide a description'
                        }
                    })} />
                    
                    <label>startTime: </label>
                    <input type="date" placeholder="startTime" {...register('startTime', {
                        required: {
                            value: true,
                            message: 'you must provide a start time'
                        }
                    })} />
                    <span className='error'>{formState.errors.startTime?.message}</span><br /><br />


                    <span className='error'>{formState.errors.description?.message}</span><br /><br />

                    <label>finishTime: </label>
                    <input placeholder="finishTime" type="date" {...register('finishTime', {
                        required: {
                            value: true,
                            message: 'you must provide a finish time'
                        }
                    })} />
                    <span className='error'>{formState.errors.finishTime?.message}</span><br /><br />
                    <button>post</button> <br/><br/>
                    <button onClick={cancel}>cancel</button>
                </form>
            </div>
        </>
    )
}