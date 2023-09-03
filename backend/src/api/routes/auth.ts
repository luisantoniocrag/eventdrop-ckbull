import { Router, Request, Response, NextFunction } from 'express';
import axios, { AxiosError } from 'axios';
import config from '../../config'
import { createUser, getUserByAddress } from '@/db/users';
import { generateJwt } from '@/helpers/jwt';

const route = Router();

function generateHeaders() {
    const crypto = require('crypto');

    const apiSecret = config.ckbull_secret;
    const timestamp = Math.floor(Date.now() / 1000);

    const hmac = crypto.createHmac('sha512', apiSecret);
    hmac.update(timestamp.toString());

    const timestampHeader = timestamp;
    const signatureHeader = hmac.digest('base64');
    const apiKeyHeader = config.ckbull_key;

    return {timestampHeader, signatureHeader, apiKeyHeader}
}


export default (app: Router) => {
    app.use("/auth", route)

    route.get("/request/signin", async (_: Request, res: Response) => {
        const {timestampHeader, signatureHeader, apiKeyHeader} = generateHeaders()
        
        try {
            const response = await axios({
                method: 'POST',
                url: `${config.ckbbull_api_url}/api/sign-in-requests`,
                headers: {
                    'Content-Type': 'application/json',
                    'x-timestamp': timestampHeader,
                    'x-signature': signatureHeader,
                    'x-api-key': apiKeyHeader
                }
            });

            return res.json({
                success: true,
                data: response.data
            });
        } catch(e) {
            console.error(e)
            return res.json({
                success: false,
                data: e as AxiosError
            });
        }
        
    });

    route.get("/request/status", async (req: Request, res: Response) => {
        const code = req.query.code as string

        try {
            const response = await axios({
                method: 'GET',
                url: `${config.ckbbull_api_url}/api/sign-in-requests/${encodeURIComponent(code)}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data) {
                let data = response.data
                
                if (data.status === "signed" && data.metadata !== null) {
                    const address = data.metadata.address as string
                    
                    const user = await getUserByAddress(address)

                    if (user.length<=0) {
                        const newUser = await createUser(address)
                        const token = generateJwt(newUser);

                        data = {...data, jwt: token}
                    } else {
                        const token = await generateJwt(user[0])
                        data = {...data, jwt: token}
                    }

                    return res.json({
                        success: true,
                        data
                    });
                }

                return res.json({
                    success: true,
                    data
                });
            }

           
        } catch(e) {
            console.error(e)
            return res.json({
                success: false,
                data: e as AxiosError
            });
        }
    });
}