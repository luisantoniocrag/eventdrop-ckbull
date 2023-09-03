import { Router, Request, Response, NextFunction } from 'express';
import axios, { AxiosError } from 'axios';
import config from '../../config'
import { createUser, getUserByAddress } from '@/db/users';
import { EvenDropCreateBody, createEvent, getEventsByCreatorID } from '@/db/drops';

const route = Router();

export default (app: Router) => {
    app.use("/drop", route)

    route.get("/", async (req: Request, res: Response, _: NextFunction) => {
        try {
            const creator_id = req.query.creator_id as string
            const events = await getEventsByCreatorID(creator_id)
            return res.json({
                success: true,
                data: events
            })
        } catch(e) {
            console.error(e)
            return res.json({
                success: false,
                data:e
            });
        }
    });

    route.post("/", async (req: Request, res: Response, _: NextFunction) => {
        try {
            const body = req.body as EvenDropCreateBody;
            const dropCreated = await createEvent(body);
            return res.json({
                success: true,
                data: dropCreated
            })
        } catch(e) {
            console.error(e)
            return res.json({
                success: false,
                data:e
            });
        }
    });
}