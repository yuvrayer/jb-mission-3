import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Meeting from "../singles/meeting/Meeting";
import Developing from "../singles/develping/Developing";
import NewMeeting from "../singles/new-meeting/NewMeeting";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/meetings"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/meetings" element={<Meeting />} />
            <Route path="/addMeeting" element={<NewMeeting />} />
            <Route path="/developing" element={<Developing />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
