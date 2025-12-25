import { prisma } from '../lib/prisma'

export async function createParticipants() {
  const participants = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
    },
    {
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
    },
    {
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
    },
  ];

  // สร้างสมาชิก
  for (const participant of participants) {
    await prisma.participant.create({
      data: participant,
    });
  }

  // ดึงสมาชิกและหนังสือทั้งหมด
  const responseParticipants = await prisma.participant.findMany();
  const responseBooks = await prisma.event.findMany(); // event = book

  // เชื่อมความสัมพันธ์ (ยืมหนังสือ)
  await Promise.all([
    addEvent(responseParticipants[0].id, responseBooks[0].id),
    addEvent(responseParticipants[0].id, responseBooks[1].id),
    addEvent(responseParticipants[0].id, responseBooks[2].id),

    addEvent(responseParticipants[1].id, responseBooks[3].id),
    addEvent(responseParticipants[1].id, responseBooks[4].id),
    addEvent(responseParticipants[1].id, responseBooks[5].id),

    addEvent(responseParticipants[2].id, responseBooks[0].id),
    addEvent(responseParticipants[2].id, responseBooks[1].id),

    addEvent(responseParticipants[3].id, responseBooks[2].id),

    addEvent(responseParticipants[4].id, responseBooks[3].id),
    addEvent(responseParticipants[4].id, responseBooks[4].id),
    addEvent(responseParticipants[1].id, responseBooks[5].id),
  ]);

  // แสดงผล
  // @ts-ignore
  const [participantsWithBooks, booksWithParticipants] = await Promise.all([
    prisma.participant.findMany({
      include: {
        events: true, // events = books
      },
    }),
    prisma.event.findMany({
      include: {
        participants: true,
      },
    }),
  ]);

  console.log(
    'Participants with their Borrowed Books:',
    JSON.stringify(participantsWithBooks, null, 2)
  );

  console.log(
    'Books with their Borrowers:',
    JSON.stringify(booksWithParticipants, null, 2)
  );
}

// ❗ ไม่เปลี่ยนชื่อฟังก์ชัน
async function addEvent(participantId: number, eventId: number) {
  // event = book
  await prisma.participant.update({
    where: { id: participantId },
    data: {
      events: {
        connect: {
          id: eventId,
        },
      },
    },
  });
}
