//import type  Event  from "../models/Event";
import type {eventModel as Event} from "../generated/prisma/models/event";
//import * as repo from "../repositories/EventRepositoryDb";
import * as repo from "../repository/eventRepositoryPrisma";



export async function getEventByCategory(category: string) {
    return repo.getEventByCategory(category);
}

export async function getAllEvents(){
    return repo.getAllEventsWithOrganizer();
}

export async function getEventById(id: number) {
    return repo.getEventById(id);
}

export async function addEvent(newEvent: Event){
    return repo.addEvent(newEvent);
}
export async function getAllEventsWithPagination(keyword: string, pageSize: number, pageNo: number) {
    const pageEvents = await repo.getAllEventsWithOrganizerPagination(keyword, pageSize, pageNo);
    return pageEvents;
}
export function count(){
  return repo.countEvent();
}
