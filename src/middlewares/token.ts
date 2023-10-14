import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";
import {ResponseBody} from "../utils/response-body.interface";

export function generateAccessToken(email: string): string {
    return jwt.sign(
        {email: email},
        process.env.TOKEN_SECRET as string,
        {expiresIn: '100h'}
    );
}

export function authenticateToken(req: Request, res: Response<ResponseBody<null>>, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.json({
            statusCode: 401,
            message: "Token Not Found"
        })
    }
    jwt.verify(
        token,
        process.env.TOKEN_SECRET as string,
        (error, user) => {
            if (error) {
                res.json({
                    statusCode: 403,
                    message: "UnAuthorize",
                })
            }
        }
    );
}