import Developing from "../developing/Developing";
import MeetingDraft from "./MeetingDraft";

export default interface Meeting extends MeetingDraft {
    id: string,
    developing: Developing
}