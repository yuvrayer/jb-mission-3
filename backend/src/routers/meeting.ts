import { Router } from "express";
import validation from "../middlewares/validation";
import { MeetingValidator } from "../controllers/meeting/validator";
import { createMeeting, getAllMeetings, getSomeMeetings } from "../controllers/meeting/controller";

const router = Router()

router.get('/', getAllMeetings)
router.get('/:developingId', getSomeMeetings)
router.post('/add', validation(MeetingValidator), createMeeting)


export default router