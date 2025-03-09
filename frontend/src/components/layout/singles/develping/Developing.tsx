import { useEffect, useState } from 'react'
import developingModel from "../../../../models/developing/Developing"
import developingService from '../../../../services/developing'
import "./Developing.css"

export default function Developing() {
    const [developings, setDevelopings] = useState<developingModel[]>([])

    useEffect(() => {
        developingService.getAllDevelopings()
            .then(setDevelopings)
            .catch(alert)
    }, [])

    return (
        <>
            <div className="center-container">
                <span>all the developings:</span>
            </div>
            <div className='Developings'>
                {developings.map(d =>
                    <div className='Developing'>
                        <h1>name: {d.name}</h1>
                        <h2>id: {d.id}</h2>
                    </div>
                )}
            </div>
        </>
    )
}