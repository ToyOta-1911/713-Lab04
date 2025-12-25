import type Event from "../models/Event";
//import type {eventModel as Event} from "../generated/prisma/models/event";

const events: Event[] = [
  {
    id: 1,
    book_title: "1984",
    isbn: "ISBN-1984",
    category: "Novel",
    author_name: "George Orwell",
    author_affiliation: "Independent",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-01T10:00:00"),
    due_date: new Date("2024-07-10T00:00:00"),
    returned_date: null
  },
  {
    id: 2,
    book_title: "Animal Farm",
    isbn: "ISBN-AF",
    category: "Political Satire",
    author_name: "George Orwell",
    author_affiliation: "Independent",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-01T10:00:00"),
    due_date: new Date("2024-07-10T00:00:00"),
    returned_date: new Date("2024-07-09T14:00:00")
  },
  {
    id: 3,
    book_title: "Norwegian Wood",
    isbn: "ISBN-NW",
    category: "Novel",
    author_name: "Haruki Murakami",
    author_affiliation: "Waseda University",
    member_code: "M002",
    member_name: "Somsri Deemark",
    phone: "0899999999",
    borrow_date: new Date("2024-07-03T15:00:00"),
    due_date: new Date("2024-07-15T00:00:00"),
    returned_date: null
  }
];
