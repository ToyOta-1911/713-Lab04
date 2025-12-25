import type Event from '../models/Event';
import * as db  from '../db';


export async function getEventByCategory(category: string): Promise<Event[]> {
    const result = await db.query('SELECT * FROM events WHERE category = $1', [category]);
    return result.rows as Event[];
}
export async function getAllEvents(): Promise<Event[]> {
    const result = await db.query('SELECT * FROM events');
    return result.rows as Event[];
}

export async function getEventById(id: number): Promise<Event | undefined> {
    const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
    const events = result.rows as Event[];
    return events.length > 0 ? events[0] : undefined;
}

export async function addEvent(newEvent: Event): Promise<Event> {
    const { book_title, isbn, category, author_name, author_affiliation, member_code, member_name, phone, borrow_date, due_date, returned_date } = newEvent;
    const result = await db.query(
        'INSERT INTO events (book_title, isbn, category, author_name, author_affiliation, member_code, member_name, phone, borrow_date, due_date, returned_date ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [book_title, isbn, category, author_name, author_affiliation, member_code, member_name, phone, borrow_date, due_date, returned_date ]
    );
    return result.rows[0] as Event;
}
