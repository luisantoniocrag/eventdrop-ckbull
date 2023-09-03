import jwt from 'jsonwebtoken';
import config from '../config'

export interface UserData {
    id: number;
    address: string;
    uuid: string;
    email?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}

export function generateJwt(userData: UserData) {
    return jwt.sign(userData, config.jwt_secret, { expiresIn: '1h' });
}