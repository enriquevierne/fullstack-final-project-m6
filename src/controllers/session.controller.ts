import { Request, Response } from "express"
import { SessionReturn } from "../interfaces"
import { sessionService } from "../services"

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: SessionReturn = await sessionService.create(req.body)

    return res.status(200).json(user)
}

export default {create}