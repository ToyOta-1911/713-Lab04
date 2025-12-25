import type { Organizer } from "./Organizer";

export default interface Event {
  id: number;

  // Book
  book_title: string;
  isbn: string;
  category: string;

  // Author
  author_name: string;
  author_affiliation: string;

  // Member
  member_code: string;
  member_name: string;
  phone: string;

  // Borrow info
  borrow_date: Date;
  due_date: Date;
  returned_date?: Date | null;

  // Organizer (optional)
  organizerId?: number | null;
  organizer?: Organizer;
}


