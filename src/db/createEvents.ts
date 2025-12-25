import { prisma } from '../lib/prisma'

export async function createEvents() {

  // ==========================
  // Organizer
  // ==========================
  const chiangMaiOrg = await prisma.organizer.create({
    data: { name: 'Chiang Mai' }
  })

  const cmuOrg = await prisma.organizer.create({
    data: { name: 'Chiang Mai University' }
  })

  const camtOrg = await prisma.organizer.create({
    data: { name: 'CAMT' }
  })

  // ==========================
  // Book Borrow Events
  // ==========================
  const events = [
    {
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
      returned_date: null,
      organizer: chiangMaiOrg
    },
    {
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
      returned_date: new Date("2024-07-09T14:00:00"),
      organizer: chiangMaiOrg
    },
    {
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
      returned_date: null,
      organizer: camtOrg
    },
    {
      book_title: "Kafka on the Shore",
      isbn: "ISBN-KAFKA",
      category: "Fantasy",
      author_name: "Haruki Murakami",
      author_affiliation: "Waseda University",
      member_code: "M001",
      member_name: "Somchai Jaidee",
      phone: "0812345678",
      borrow_date: new Date("2024-07-10T09:00:00"),
      due_date: new Date("2024-07-20T00:00:00"),
      returned_date: null,
      organizer: cmuOrg
    },
    {
      book_title: "Sapiens",
      isbn: "ISBN-SAPIENS",
      category: "History",
      author_name: "Yuval Harari",
      author_affiliation: "Hebrew University",
      member_code: "M003",
      member_name: "Anan Prasert",
      phone: "0866666666",
      borrow_date: new Date("2024-07-10T09:00:00"),
      due_date: new Date("2024-07-20T00:00:00"),
      returned_date: new Date("2024-07-18T11:00:00"),
      organizer: cmuOrg
    }
  ]

  // ==========================
  // Insert
  // ==========================
  for (const event of events) {
    await prisma.event.create({
      data: {
        book_title: event.book_title,
        isbn: event.isbn,
        category: event.category,
        author_name: event.author_name,
        author_affiliation: event.author_affiliation,
        member_code: event.member_code,
        member_name: event.member_name,
        phone: event.phone,
        borrow_date: event.borrow_date,
        due_date: event.due_date,
        returned_date: event.returned_date,
        organizerId: event.organizer.id
      }
    })
  }

  console.log("✅ Database has been initialized with book borrow events.")
}
