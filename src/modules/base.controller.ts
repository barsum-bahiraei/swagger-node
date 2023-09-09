import {Response} from "express";

export class BaseController {
    response(
        res: Response,
        message?: string,
        data?: any,
        code: number = 200
    ) {
        res.status(code).json({
            message,
            data,
        });
    }
}