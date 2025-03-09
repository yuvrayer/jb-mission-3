import axios from "axios";
import MeetingDraft from "../models/meeting/MeetingDraft";
import MeetingModel from "../models/meeting/Meeting";

class Meeting {

    // if a class has only methods, it means it doesn't have data
    // a class without data is called a stateless class
    // a class with data is called a stateful class
    async getAllMeetings(): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings`)
        return response.data
    }

    async createMeeting(draft: MeetingDraft): Promise<MeetingModel> {
        const response = await axios.post<MeetingModel>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/add`, draft)
        return response.data
    }

    async getMeetings(developingId: string): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${developingId}`)
        return response.data
    }
}

const meeting = new Meeting()
export default meeting;