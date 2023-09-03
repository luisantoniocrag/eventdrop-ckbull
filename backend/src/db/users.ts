import { UserData } from '@/helpers/jwt';
import pool from './postgres';
import { v4 as uuidv4 } from 'uuid';


export const getUserByAddress = async (address:string): Promise<UserData[]> => {
    try {
        const query = 'SELECT * FROM users WHERE address = $1 AND deleted_at IS NULL'
        const result = await pool.query(query, [address]);
        return result.rows
    } catch (e) {
        console.error('Error getting user', e);
    }
};

export const createUser = async (address:string): Promise<UserData> => {
    const uuid = `uuid-testnet-${uuidv4()}`

    try {
        const query = 'INSERT INTO users (uuid, address) VALUES ($1, $2) RETURNING *'
        const values = [uuid, address]
        const result = await pool.query(query, values);
        return result.rows[0]
    } catch(e) {
        console.error('Error creating user', e)
    } 
}