import Joi from "joi";

export const MeetingValidator = Joi.object({
    meetingRoom: Joi.string().max(20).required(),
    description: Joi.string().max(60).required(),
    developingId: Joi.string().uuid().required(),
    startTime: Joi.date().required(),
    finishTime: Joi.date().required(),
})