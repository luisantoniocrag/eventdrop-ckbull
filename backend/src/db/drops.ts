import { UserData } from '@/helpers/jwt';
import pool from './postgres';

export interface EvenDropCreateBody {
    name: string,
    description: string,
    links: string,
    start_date: number,
    end_date: number,
    event_type: number,
    unlockable_content: string,
    transferable: number,
    visibility: number,
    poap_cid: string,
    creator_id: number
}

export const getEventsByCreatorID = async (creator_id: string) => {
    try {
        const query = 'SELECT * FROM events WHERE creator_id = $1 AND deleted_at IS NULL'
        const values = [parseInt(creator_id, 10)]
        const result = await pool.query(query, values);
        return result.rows;
    } catch(e) {
        console.error('Error getting user events', e);
    }
}

export const createEvent = async  (eventDrop: EvenDropCreateBody) => {
    try {
        const {name, description, links, start_date, end_date, event_type, unlockable_content, transferable, visibility, poap_cid, creator_id} = eventDrop;
        const query = 'INSERT INTO events (name, description, links, start_date, end_date, event_type, unlockable_content, transferable, visibility, poap_cid, creator_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *'
        const values = [
            name,
            description,
            links,
            new Date(start_date * 1000).toISOString(),
            new Date(end_date * 1000).toISOString(),
            event_type,
            unlockable_content,
            transferable,
            visibility,
            poap_cid,
            creator_id,
        ];
        const result = await pool.query(query, values)
        return result.rows[0]
    } catch(e) {
        console.error('Error creating event drop', e);
    }
}
