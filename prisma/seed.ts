import { prisma } from '../src/lib/prisma'
import {createEvents} from "../src/db/createEvents";

const seedData = async ()=> {
   await prisma.event.deleteMany();
   await prisma.organizer.deleteMany();
   await createEvents();
}
await seedData();

