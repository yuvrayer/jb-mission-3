import { NextFunction, Request, Response } from "express";

import Meeting from "../../models/meeting";
import Developing from "../../models/developing";
import { Op } from "sequelize";

export async function getAllMeetings(req: Request, res: Response, next: NextFunction) {
    try {
        const meetings = await Meeting.findAll({
            include: [Developing]
        })
        // console.log(user.get({ plain: true }))
        res.json(meetings)
        next()
    } catch (e) {
        next(e)
    }
}


export async function createMeeting(req: Request, res: Response, next: NextFunction) {
    try {
        const meeting = await Meeting.create(req.body)
        res.json(meeting)
    } catch (e) {
        next(e)
    }
}

export async function getSomeMeetings(req: Request<{ developingId: string }>, res: Response, next: NextFunction) {
    try {
        const meetings = await Meeting.findAll({
            where: {
                developingId: req.params.developingId
            },
            include: [Developing]
        })
        // console.log(user.get({ plain: true }))
        res.json(meetings)

    } catch (e) {
        next(e)
    }
}
