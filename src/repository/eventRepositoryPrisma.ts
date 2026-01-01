import { prisma } from '../lib/prisma'
import type { eventModel as Event } from "../generated/prisma/models/event"
import {Prisma} from "@prisma/client/extension";

/* ===========================
   GET
=========================== */

export function getEventsByCategory(category: string) {
  return prisma.event.findMany({
    where: { category },
  })
}

export function getAllEvents() {
  return prisma.event.findMany()
}

export function getEventById(id: number) {
  return prisma.event.findUnique({
    where: { id },
  })
}

/* ===========================
   CREATE
=========================== */

export function addEvent(newEvent: Event) {
  return prisma.event.create({
    data: {
      // Book
      book_title: newEvent.book_title,
      isbn: newEvent.isbn,
      category: newEvent.category,

      // Author
      author_name: newEvent.author_name,
      author_affiliation: newEvent.author_affiliation,

      // Member
      member_code: newEvent.member_code,
      member_name: newEvent.member_name,
      phone: newEvent.phone,

      // Borrow
      borrow_date: newEvent.borrow_date,
      due_date: newEvent.due_date,
      returned_date: newEvent.returned_date,

      // Relation
      organizerId: newEvent.organizerId,
    },
  })
}
export function getEventByCategory(category: string) {
  return prisma.event.findMany({
    where: {
      category: category,
    },
  })
}
/* ===========================
   JOIN organizer
=========================== */

export function getAllEventsWithOrganizer() {
  return prisma.event.findMany({
    select: {
      id: true,
      book_title: true,
      member_name: true,
      borrow_date: true,
      due_date: true,
      returned_date: true,
      organizer: {
        select: {
          name: true,
        },
      },
    },
  })
}
export async function getAllEventsWithOrganizerPagination(
    keyword: string,
  pageSize: number,
  pageNo: number
) {
  const where = {
    OR: [
        {title: {contains: keyword,
                    mode: Prisma.QueryMode.insensitive}},
        {description: {contains: keyword}},
       {category: {contains: keyword}},
        { organizer: { name: { contains: keyword } } }
    ]

  }
  const events = await prisma.event.findMany({
    skip: pageSize * (pageNo - 1),
    take: pageSize,
    select: {
      id: true,
      book_title: true,
      member_name: true,
      borrow_date: true,
      due_date: true,
      returned_date: true,
      organizer: {
        select: {
         name: true
        }
      }
    }

  });
}

function where() {

}

const count = await prisma.event.count({ where });
  return { count, events } as unknown as PageEvent;

export function countEvent() {
  return prisma.event.count();
}
