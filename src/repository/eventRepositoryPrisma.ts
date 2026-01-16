import { prisma } from "../lib/prisma";
import type { eventModel as Event } from "../generated/prisma/models/event";
import type { Prisma } from "@prisma/client";


// ถ้าคุณมี type นี้อยู่ที่อื่นให้ import แทน
export type PageEvent = {
  count: number;
  events: Array<{
    id: number;
    book_title: string;
    member_name: string;
    borrow_date: Date;
    due_date: Date;
    returned_date: Date | null;
    organizer: { name: string } | null;
  }>;
};

/* ===========================
   GET
=========================== */

export function getAllEvents() {
  return prisma.event.findMany();
}

export function getEventById(id: number) {
  return prisma.event.findUnique({ where: { id } });
}

export function getEventsByCategory(category: string) {
  return prisma.event.findMany({ where: { category } });
}

/* ===========================
   CREATE
=========================== */

export function addEvent(newEvent: Event) {
  return prisma.event.create({
    data: {
      book_title: newEvent.book_title,
      isbn: newEvent.isbn,
      category: newEvent.category,
      author_name: newEvent.author_name,
      author_affiliation: newEvent.author_affiliation,
      member_code: newEvent.member_code,
      member_name: newEvent.member_name,
      phone: newEvent.phone,
      borrow_date: newEvent.borrow_date,
      due_date: newEvent.due_date,
      // กัน undefined -> null (สำคัญ)
      returned_date: newEvent.returned_date ?? null,
      organizerId: newEvent.organizerId ?? null,
    },
  });
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
      organizer: { select: { name: true } },
    },
  });
}

export async function getAllEventsWithOrganizerPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
) {
  const where: Prisma.EventWhereInput = keyword
    ? {
        OR: [
          { book_title: { contains: keyword, mode: "insensitive" } },
          { member_name: { contains: keyword, mode: "insensitive" } },
          { category: { contains: keyword, mode: "insensitive" } },
          { organizer: { is: { name: { contains: keyword, mode: "insensitive" } } } },
        ],
      }
    : {};

  const [count, events] = await Promise.all([
    prisma.event.count({ where }),
    prisma.event.findMany({
      where,
      skip: pageSize * (pageNo - 1),
      take: pageSize,
      select: {
        id: true,
        book_title: true,
        member_name: true,
        borrow_date: true,
        due_date: true,
        returned_date: true,
        organizer: { select: { name: true } },
      },
      orderBy: { id: "desc" },
    }),
  ]);

  return { count, events };
}

export function countEvent() {
  return prisma.event.count();
}
