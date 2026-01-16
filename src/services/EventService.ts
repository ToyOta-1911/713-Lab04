//import type  Event  from "../models/Event";
import type {eventModel as Event} from "../generated/prisma/models/event";
//import * as repo from "../repositories/EventRepositoryDb";
import * as repo from "../repository/eventRepositoryPrisma";
import {prisma} from "../lib/prisma";



export async function getEventByCategory(category: string) {
    return repo.getEventByCategory(category);
}

export async function getAllEvents(){
    return repo.getAllEventsWithOrganizer();
}

export async function events(){
    return repo.getAllEventsWithOrganizer();
}

export async function getEventById(id: number) {
    return repo.getEventById(id);
}

export async function addEvent(newEvent: Event){
    return repo.addEvent(newEvent);
}
export async function getAllEventsWithPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
): Promise<{
  events: Event[];
  totalCount: number;
  pageNo: number;
  pageSize: number;
  totalPages: number;
}> {
  // @ts-ignore
    const events = await prisma.event.findMany({
    where: {
      book_title: {
        contains: keyword,
        mode: "insensitive",
      },
    },
    skip: (pageNo - 1) * pageSize,
    take: pageSize,
    include: { organizer: true },
  });

  const totalCount = await prisma.event.count({
    where: {
      book_title: {
        contains: keyword,
        mode: "insensitive",
      },
    },
  });

  return {
    events,
    totalCount,
    pageNo,
    pageSize,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

export function count(){
  return repo.countEvent();
}
